# Use the official image as a parent image
FROM node:lts-alpine AS builder

RUN \
	mkdir -p /app && \
	adduser -D -h /app app app && \
	apk update --no-cache && \
	apk upgrade --no-cache && \
	apk add \
		bash \
		jq \
		zip && \
	rm -rf /var/cache/apk/

# Set the working directory
WORKDIR /app

# Copy the file from your host to your current location
COPY package.json package-lock.json /app/
RUN yarn install --frozen-lockfile
VOLUME /app/node_modules

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . /app/
RUN echo ${VERSION} > /VERSION
ENTRYPOINT [ "/app/bin/docker_entrypoint" ]
CMD [ "build" ]



########################################################################################################################
# Development application                                                                                              #
########################################################################################################################
FROM builder AS development
# Run the specified command within the container.
ENTRYPOINT [ "/app/bin/docker_entrypoint" ]
CMD [ "run" ]



FROM development AS test
ENTRYPOINT [ "/app/bin/docker_entrypoint" ]
CMD [ "test" ]
