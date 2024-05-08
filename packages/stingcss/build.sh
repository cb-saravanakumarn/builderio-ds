#!/usr/bin/env bash

# Pre-Build Styles
npm run prebase
npm run pre-utilo
npm run components
npm run utility

# Component 
npm run component:js

#Utilities
npm run utility:js

#Colors & Themes
cp -R ./sting-css/theming dist

#Copy Index.js
cp ./index.js dist