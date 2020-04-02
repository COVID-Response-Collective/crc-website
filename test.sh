#!/bin/bash
set -ex
cd "$(realpath "$(dirname "${BASH_SOURCE[0]}")")"

VERSION=$(jq -r '.version' package.json)
export VERSION
tag="crc-website:${VERSION}-test"

docker build --target test --tag "${tag}" .
docker run -it --rm "${tag}"
