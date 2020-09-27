// @ts-check
const reactPlugin = require("vite-plugin-react");

/**
 * @type { import('vite').UserConfig }
 */
const config = {
  jsx: "react",
  plugins: [reactPlugin],
  cssPreprocessOptions: {
    less: {
      modifyVars: {
        "preprocess-custom-color": "green",
      },
    },
  },
};

module.exports = config;
