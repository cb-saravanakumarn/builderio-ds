#!/usr/bin/env bash

npm run components && npm run merge:styled && npm run prejss

cp index.js dist/index.js
cp theming/colors.js dist/colors.js
