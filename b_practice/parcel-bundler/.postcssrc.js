// ESM
// import autoprefixer from 'autoprefixer'

// CommonJS
const autopreixer = require("autoprefixer");

// CommonJS
// module.exports = {
//   plugins: [autopreixer],
// };

// 간소화 (require, export 한번에 사용)
module.exports = {
  plugins: [require("autoprefixer")],
};
