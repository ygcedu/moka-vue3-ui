#!/usr/bin/env bash

rm -rf dist &&
  yarn build &&
  cd dist &&
  git init &&
  git add . &&
  git commit -m "deploy" &&
  git branch -M master &&
  git remote add origin git@github.com:ygcedu/moka-ui-website.git &&
  git push -f -u origin master &&
  cd -
echo https://ygcedu.github.io/moka-ui-website/index.html
