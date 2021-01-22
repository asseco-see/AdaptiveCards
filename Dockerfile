ARG APP_PUBLISH_PATH="source/nodejs/adaptivecards-site/public"
FROM registry.see.asseco.com/tools/nginx:stable

ENV APP_BASE_PATH=/ \
    APP_WWW_ROOT=/usr/share/nginx/html 

COPY --chown=1001:0 scripts/init.sh /

CMD [ "bash", "/init.sh" ]