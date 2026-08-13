#!/usr/bin/env bash
set -e
# Webpack 4 (Gatsby v2) needs the OpenSSL legacy provider on Node 17+.
# npx resolves the gatsby / gatsby-plugin-s3 binaries from node_modules/.bin.
NODE_OPTIONS=--openssl-legacy-provider npx gatsby build
npx gatsby-plugin-s3 deploy --yes