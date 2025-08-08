module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "120",
          safari: "15",
        },
        useBuiltIns: "usage",
        corejs: {
          version: 3,
        },
      },
    ],
  ],
};
