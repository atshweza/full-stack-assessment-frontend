// NavBar.stories.js

import React from 'react';
import { NavBar } from './NavBar';

// This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'NavBar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const NavBarStory = Template.bind({});

NavBar.args = {
  /* the args you need here will depend on your component */
};