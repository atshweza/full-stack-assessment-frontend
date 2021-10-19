/**
 * Page Generator
 */

const componentExists = require("../utils/componentExists");

module.exports = {
  description: "Add a page component",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "What should it be called?",
      default: "Home",
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? "A component or page with this name already exists"
            : true;
        }

        return "The name is required";
      },
    },
    {
      type: "confirm",
      name: "wantHeaders",
      default: false,
      message: "Do you want headers?",
    },
  ],
  actions: (data) => {
    // Generate index.js and index.test.js
    const pageTemplate = "./page/index.js.hbs"; // eslint-disable-line no-var

    const actions = [
      {
        type: "add",
        path: "../../src/pages/{{camelCase name}}/index.js",
        templateFile: pageTemplate,
        abortOnFail: true,
      },
      {
        type: "add",
        path:
          "../../src/pages/{{camelCase name}}/__tests__/{{camelCase name}}.test.js",
        templateFile: "./page/test.js.hbs",
        abortOnFail: true,
      },
    ];

    actions.push({
      type: "prettify",
      path: "/pages/",
    });

    return actions;
  },
};
