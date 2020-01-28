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

npm install -g typescript && npm install @babel/core babel-loader && npm install webpack webpack-cli

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# Machine Formatting

if [ .prettierrc -e ]
	then	
		touch .prettierrc
fi

npm install --save-dev prettier standard

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# Machine Analysis

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# Testing Environment 

## Regression Testing

if [ wdio.conf -e ]
	then	
		touch wdio.conf
fi

npm install --save-dev wdio

## Component Testing

npm install --save-dev storybook @storybook/addon-actions @storybook/addon-links @storybook/addons @storybook/react

npx -p @storybook/cli sb init

## Unit Tests

npm install --save-dev mocha jasmine chai

## Snapshot / Unit Testing

npm install --save-dev jest

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# QA Environment

## Lighthouse CLI
npm install --save-dev lighthouse-cli

## Reporting
# @link https://docs.google.com/spreadsheets/d/14mm2FRqMGerwqcX_pkKxXMzrMiPipDpy1_rnWjdhtCY/edit?usp=sharing
npm install --save-dev allure
