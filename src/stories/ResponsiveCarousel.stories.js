// ResponsiveCarousel.stories.js

import React from 'react';
import { ResponsiveCarousel } from './ResponsiveCarousel';

// This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'ResponsiveCarousel',
  component: ResponsiveCarousel,
};

const Template = (args) => <ResponsiveCarousel {...args} />;

export const ResponsiveCarouselStory = Template.bind({});

ResponsiveCarousel.args = {
  /* the args you need here will depend on your component */
};