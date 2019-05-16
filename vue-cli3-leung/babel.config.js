/**
 * @desc 保证ES版本的兼容 加入polyfills
 */
module.exports = {
  presets: [
    [
      '@vue/app',
      {
        polyfills: ['es6.promise', 'es6.symbol']
      }
    ]
  ]
}
