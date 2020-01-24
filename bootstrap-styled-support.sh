#! /usr/bin/bash

# ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#
# Leibowitz Branding and Design
# Styled Components Support
#
# @version 0.0.1

## Styled Components
npm install --save styled-components

## React Support
npm install react react-dom react-is

## Babel Support

npm install --save-dev babel-plugin-styled-components

if [ .babelrc -e ]
	then
		touch .babelrc && curl https://gist.githubusercontent.com/matthewstokeley/48172f42eb6dcd8086ac7afbd46c5ae4/raw/23c65878a1c87217e0f440689c37bc853c1ca210/.babelrc > .babelrc
fi

## Storybook Support
