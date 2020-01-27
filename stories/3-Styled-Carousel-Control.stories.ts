import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { UIMediator } from './modules/events';
// import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};

const Button = styled.button`

  border-radius: 2rem;
  padding: 1rem;
  transition: all 200ms ease-in; 
  
  &:hover {
    border-color: 1px solid #000;
    cursor: pointer;
    background: #fafafa;
  }
  
  &:focus,
  &:focus-within {
    outline: none;
  }
  
  &:active {

  }

  &:visited {

  }

  > span {

  }

`;

export const StyledDatasetButton = ( props ) => (

  <Button onClick={UIMediator.listen(event)}>
    <span  
    	role="navigatio  " 
    	aria-label="carousel ui control"
    	aria-pressed="false"
    	data-direction="{props.direction}"
    	>
    	&rarr;
    </span>
  </Button>
);
