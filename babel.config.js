module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ["module-resolver", {
      alias: {
        "@controllers": "./src/controllers",
        "@models": "./src/models",
        "@shared": "./src/shared",
        "@views": "./src/views",
        "@config": "./src/shared/config"
      }
    }]
  ],
  ignore: [
    "**/*.spec.ts"
  ]
};
