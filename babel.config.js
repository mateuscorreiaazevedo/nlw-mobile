module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'nativewind/babel',
      [
        'module-resolver',
        {
          root: '.',
          extensions: ['.ts', '.js', '.tsx', '.jsx', 'android.js', 'android,tsx', 'ios.js', 'ios.tsx'],
          alias: {
            '@': './src'
          }
        }
      ],
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: '.env',
          blocklist: null,
          allowlist: null,
          safe: false,
          allowUndefined: true,
          verbose: false
        }
      ]
    ]
  }
}
