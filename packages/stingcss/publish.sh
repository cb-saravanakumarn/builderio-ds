#!/usr/bin/env bash

npm run build && npm version ${1:-patch} && npm publish
