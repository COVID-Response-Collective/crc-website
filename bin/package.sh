#!/bin/bash
set -ex

if [[ -z "${PACKAGE_TARGET+x}" ]]; then
	echo "PACKAGE_TARGET must be set to run this command" >&2
	exit 1
fi

(
	cd build
	zip -r -9 "${PACKAGE_TARGET}" *
)

if [[ -n "${PACKAGE_UID+x}" ]]; then
	chown "${PACKAGE_UID}" "${PACKAGE_TARGET}"
fi

if [[ -n "${PACKAGE_GID+x}" ]]; then
	chown :"${PACKAGE_GID}" "${PACKAGE_TARGET}"
fi
