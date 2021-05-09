FROM alpine:3.13

ARG UID
EXPOSE $UID

RUN adduser -u ${UID} --disabled-password --gecos "" appuser

RUN echo "export COLUMNS=300" >> /home/appuser/.bashrc


RUN apk add --no-cache \
    coreutils \
    php8-fpm \
    php8-ctype \
    php8-curl \
    php8-dom \
    php8-gd \
    php8-iconv \
    php8-json \
    php8-intl \
    php8-fileinfo\
    php8-mbstring \
    php8-opcache \
    php8-openssl \
    php8-pdo \
    php8-pdo_mysql \
    php8-mysqli \
    php8-xml \
    php8-zlib \
    php8-phar \
    php8-tokenizer \
    php8-session \
    php8-simplexml \
    php8-zip \
    php8-xmlwriter \
    php8-pecl-apcu \
    php8-xmlreader \
    make \
    curl  \
    bash  \
    cairo\
    pango\
    gdk-pixbuf \
    py3-cffi \
    py3-pillow \
    git
#    py-lxml

RUN apk add py3-pip

RUN apk add php8-pecl-imagick


# Allow to enable php8-xdebug
#ARG ENABLE_PHP_XDEBUG
#RUN if [[ "$ENABLE_PHP_XDEBUG" == "1" ]]; then \
#        apk add --no-cache php8-pecl-xdebug; \
#    fi

RUN curl -sS https://getcomposer.org/installer | tee composer-setup.php \
    && php8 composer-setup.php && rm composer-setup.php* \
    && chmod +x composer.phar && mv composer.phar /usr/bin/composer \
    && ln -s /usr/bin/php8 /usr/local/bin/php



COPY maxim.ini /etc/php8/conf.d/
COPY maxim.ini /etc/php8/cli/conf.d/
COPY maxim.ini  /etc/php8/conf.d/
#COPY php.ini  /etc/php8/conf.d/

COPY maxim.pool.conf /etc/php8/php-fpm.d/




WORKDIR /var/www/app

CMD ["php-fpm8", "-F"]

EXPOSE 9001
