// PromotionCard.stories.js

import React from 'react';
import { PromotionCard } from './PromotionCard';

// This default export determines where your story goes in the story list
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'PromotionCard',
  component: PromotionCard,
};

const Template = (args) => <PromotionCard {...args} />;

export const PromotionCardStory = Template.bind({});

PromotionCard.args = {
  /* the args you need here will depend on your component */
};