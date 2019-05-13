# docker-nginx-mock-websockets

When running this project you can see that http://example.org get proxied as intended, but websockets will never hit my nginx proxy

To run the project clone it and in a terminal type:

`docker-compose up --force-recreate --build`

force recreate is so that our nginx config get's updated.
