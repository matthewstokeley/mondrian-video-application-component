#! /usr/bin/bash

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#
# Leibowitz Branding and Design
# Modern Stylesheet Build Environment
#
# @version 0.0.1

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# Modern Stylesheets

if [ .babelrc -e ]
	then
		touch .babelrc
endif

npm install csso prettier scss scsslint csslint postcss webpack critical styled

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# Machine Formatting

touch .prettierrc

npm install --save-dev prettier standard

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# Machine Analysis

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# Testing Environment 

## Regression Testing

touch wdio.conf

npm install --save-dev wdio

## Component Testing

npx -p @storybook/cli sb init

## Unit Tests

npm install --save-dev mocha karma chai

## Snapshot Testing

npm install --save-dev jest

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# QA Environment

## Lighthouse CLI
npm install --save-dev lighthouse-cli

## Reporting
npm install --save-dev allure