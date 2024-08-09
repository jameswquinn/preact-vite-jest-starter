module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic', importSource: 'preact' }]
  ],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { pragma: 'h', pragmaFrag: 'Fragment' }]
  ]
};
