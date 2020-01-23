#! /usr/bin/bash

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#
# Leibowitz Branding and Design
# Application Component Development Environment
#
# @version 0.0.1
#
# @see Mondrian Video Application Component Notes
#
# @link https://docs.google.com/document/d/1kJQP4hGYKLur3C1ML1tpcvgITBLFUXkrT47ZVJMjryU/edit?usp=sharing

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# Modern Javascript

npm install -g typescript && npm install @babel/core babel-loader

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