FROM nginx:1.19.6

COPY nginx.conf /etc/nginx/
COPY maxim.conf /etc/nginx/conf.d/

RUN echo "upstream php-upstream { server php:9001; }" > /etc/nginx/conf.d/upstream.conf

CMD ["nginx"]
ENV dollar="$"
EXPOSE 80
EXPOSE 443
