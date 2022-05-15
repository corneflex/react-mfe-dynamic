module.exports = {
  name: 'extension',
  library: { type: 'var', name: 'extension' },
  exposes: {
    './Core': './src/components/Core.tsx',
  },
};
