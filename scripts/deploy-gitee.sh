#!/usr/bin/env bash

yarn build &&
  cd dist &&
  git init &&
  git add . &&
  git commit -m 'deploy' &&
  git remote add origin https://gitee.com/ygc_edu/moka-vue3-ui-website.git &&
  git push -u origin master -f &&
  cd -
