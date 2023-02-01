#! /bin/bash

npm config set registry https://registry.npmjs.org

npm publish

npm config set registry https://registry.npmmirror.com