#! /usr/bin/bash

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#
# Leibowitz Branding and Design
# Modern Stylesheet Build Environment
#
# @version 0.0.1

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
# Machine Analysis and Optimization

npm install --save-dev csso scsslint csslint postcss

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# QA Environment

## CSS Stats


## Reporting
npm install --save-dev allure

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# CSS Preprocessors

npm install --save-dev scss sass

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# CSS Components

if [ .babelrc -e ]
	then
		touch .babelrc
fi

npm install --save styled-components react react-dom react-is

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
# 
# CSS Production 

npm install --save-dev webpack critical 