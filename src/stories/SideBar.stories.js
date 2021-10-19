// SideBar.stories.js

import React from 'react';
import { SideBar } from './SideBar';

// This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'SideBar',
  component: SideBar,
};

const Template = (args) => <SideBar {...args} />;

export const SideBarStory = Template.bind({});

SideBar.args = {
  /* the args you need here will depend on your component */
};