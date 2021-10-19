/**
 * Component Generator
 */

/* eslint strict: ["off"] */

"use strict";

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add a functional component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Button",
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or page with this name already exists"
            : true;
        }

        return "The name is required";
      }
    },
    {
      type: "confirm",
      name: "wantStyledComp",
      default: true,
      message: "Do you want this to be a styled component?"
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your component in React.memo?',
    },
  ],
  actions: data => {
    // Generate index.js and index.test.js
    const componentTemplate = "./component/index.js.hbs";
    const styledComponentTemplate = "./component/styledComponent.js.hbs";
    const storybookStoriesTemplate = "./component/storybook.stories.js.hbs";
    const storybookComponentTemplate = "./component/storybook.component.js.hbs";

    const actions = [
      {
        type: "add",
        path: "../../src/components/{{camelCase name}}/index.js",
        templateFile: componentTemplate,
        abortOnFail: true
      },
      {
        type: "add",
        path:
          "../../src/components/{{camelCase name}}/__tests__/{{camelCase name}}.test.js",
        templateFile: "./component/test.js.hbs",
        abortOnFail: true
      },
      {
        type: "add",
        path:
          "../../src/stories/{{properCase name}}.js",
        templateFile: storybookComponentTemplate,
        abortOnFail: true
      },
      {
        type: "add",
        path:
          "../../src/stories/{{properCase name}}.stories.js",
        templateFile: storybookStoriesTemplate,
        abortOnFail: true
      },
    ];

    // If they want a styled component
    if (data.wantStyledComp) {
      actions.push({
        type: "add",
        path:
          "../../src/components/{{camelCase name}}/styledComponents/index.js",
        templateFile: styledComponentTemplate,
        abortOnFail: true
      });
    }

    actions.push({
      type: "prettify",
      path: "/components/"
    });

    return actions;
  }
};
