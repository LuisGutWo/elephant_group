module.exports = {
  plugins: [
    require("autoprefixer"),
    require("@fullhuman/postcss-purgecss").default({
      content: ["./src/**/*.{js,jsx,ts,tsx,html}", "./public/**/*.html"],
      safelist: {
        standard: [
          /^active/,
          /^show/,
          /^is-/,
          /^navbar/,
          /^dropdown/,
          /^container/,
          /^row/,
          /^col/,
        ],
        deep: [],
        greedy: [],
      },
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/.]+/g) || [],
    }),
  ],
};
