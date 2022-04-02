module.exports = {
  presets: [
    ['module:metro-react-native-babel-preset'],
    ["@babel/preset-env", { "targets": { "esmodules": "true" } }],
    ["@babel/preset-react", { "targets": { "esmodules": "true" } }]
  ],
  env: {
    production: {
      plugins: [
        ["@babel/plugin-proposal-private-property-in-object", { "loose": true }],
        ["@babel/plugin-proposal-private-methods", { "loose": true }],
        ['react-native-paper/babel'],
        ["@babel/plugin-proposal-object-rest-spread"],
        ["@babel/plugin-proposal-class-properties", { "loose": true }]
      ],
    },
  },
};