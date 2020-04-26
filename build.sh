#!/bin/bash
set -ex
cd "$(realpath "$(dirname "${BASH_SOURCE[0]}")")"

VERSION=$(jq -r '.version' package.json)
export VERSION
target="dist/crc-website-${VERSION}.zip"
container_target="/app/${target}"
tag="crc-website:${VERSION}-builder"

docker build --target builder --tag "${tag}" .

rm -rf dist/
mkdir -p dist
docker run \
	-it \
	--rm \
	-e PACKAGE_TARGET="${container_target}" \
	-e PACKAGE_UID=$(id -u) \
	-e PACKAGE_GID=$(id -g) \
	-v "${PWD}":/app/ro \
	-v "${PWD}"/dist:/app/dist:rw \
	"${tag}"

echo "Done! Build is now at ${target}"
