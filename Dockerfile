FROM nginx:stable-alpine

COPY default.conf /etc/nginx/conf.d/
COPY dist/ore-hq-pool-web /usr/share/nginx/html/ore-hq-pool-web

# When the container starts, replace the env.js with values from environment variables
CMD ["/bin/sh",  "-c",  "exec nginx -g 'daemon off;'"]
