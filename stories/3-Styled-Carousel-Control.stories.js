import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button',
  component: Button,
};

export const Text = () => <Button onClick={action('clicked')}>&rarr;</Button>;

export const StyledDatasetButton = ( props ) => (
  <Button onClick={action('clicked')}>
    <span 
    	role="navigation" 
    	aria-label="carousel ui control"
    	aria-pressed="false"
    	data-direction="{props.direction}"
    	>
    	&rarr;
    </span>
  </Button>
);
