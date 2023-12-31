/* not allowed baseUrl
module.exports = {
    baseUrl: process.env.NODE_ENV === 'production'
      ? '././' // prod
      : './', // dev
     }
*/
module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '././' : './',
  };

  // https://github.com/vuejs/vue-cli/issues/1623