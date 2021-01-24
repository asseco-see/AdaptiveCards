ARG APP_PUBLISH_PATH=source/nodejs/adaptivecards-site/public
FROM registry.see.asseco.com/tools/nginx:stable

ENV APP_BASE_PATH=/adaptive-ui

COPY --chown=1001:0 robots.txt /usr/share/nginx/html/robots.txt
COPY --chown=1001:0 scripts/init.sh /

CMD [ "bash", "/init.sh" ]