FROM node:16-slim
WORKDIR /home/node/app
ENV REACT_APP_API_URL=""

ADD panel/package.json package.json
ADD panel/yarn.lock yarn.lock

RUN yarn install --network-timeout 100000
ADD panel .

RUN yarn build


FROM node:16-slim
WORKDIR /home/node/app

ADD backend/package.json package.json
ADD backend/yarn.lock yarn.lock

RUN yarn install --network-timeout 100000
ADD backend .
COPY --from=0 /home/node/app/build /home/node/app/public
# ENV GITHUB_OAUTH_REDIRECT_URL=""
CMD [ "yarn", "start" ]
