ARG APP_PUBLISH_PATH=source/nodejs/adaptivecards-site/public
FROM registry.see.asseco.com/tools/nginx:stable

ENV APP_BASE_PATH=/ \
    APP_WWW_ROOT=/usr/share/nginx/html

COPY --chown=1001:0 robots.txt ${APP_WWW_ROOT}/robots.txt
COPY --chown=1001:0 default_index.html ${APP_WWW_ROOT}/index.html
COPY --chown=1001:0 source/nodejs/adaptivecards-site/public ${APP_WWW_ROOT}/adaptive-ui

CMD [ "nginx", "-g", "daemon off;" ]