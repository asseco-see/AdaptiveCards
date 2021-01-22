ARG APP_PUBLISH_PATH=source/nodejs/adaptivecards-site/public
FROM registry.see.asseco.com/tools/nginx:stable

ENV APP_BASE_PATH=/ 

RUN ln -s /usr/share/nginx/html /usr/share/nginx/html/adaptive-ui

COPY --chown=1001:0 robots.txt /usr/share/nginx/html/robots.txt

CMD [ "nginx", "-g", "daemon off;" ]