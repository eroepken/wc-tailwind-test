const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");

const tailwindConfig = require("./tailwind.config.js");

module.exports = {
  plugins: [
    tailwindConfig && tailwindcss(tailwindConfig),
    cssnano(),
    require("autoprefixer"),
  ],
};
