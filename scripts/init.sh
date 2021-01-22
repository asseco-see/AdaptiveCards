#!/bin/bash
set -e
shopt -s nullglob dotglob
## BEGIN: ADDING BASH TRAPS
# keep track of the last executed command
trap 'last_command=$current_command; current_command=$BASH_COMMAND' DEBUG
# echo an error message before exiting
trap 'echo "\"${last_command}\" command failed with exit code $?."' EXIT
## END: ADDING BASH TRAPS

## BEGIN: ADDING TRAILING SLASH
[[ "${APP_BASE_PATH}" != */ ]] && APP_BASE_PATH="${APP_BASE_PATH}/"
## END: ADDING TRAILING SLASH

## BEGIN: REPLACE ENVS
sed -i -e s~\"/\"~\"${APP_BASE_PATH}\"~g ${APP_WWW_ROOT}/index.html
## END: REPLACE ENVS

## BEGIN: ADD REWRITE PATH
if [[ "${APP_BASE_PATH}" != "/" ]]; then
  cp /etc/nginx/conf.d/default.conf /tmp/default.conf
  cat /tmp/default.conf | sed "/location \/ {/a \        rewrite \"(?i)${APP_BASE_PATH%/}(/|$)(.*)\" /\$2 break;" > /etc/nginx/conf.d/default.conf
fi
## BEGIN: end REWRITE PATH

exec nginx -g 'daemon off;'