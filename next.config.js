// ファイルの先頭に eslint-disable を追加
/* eslint-disable
    @typescript-eslint/no-var-requires,
    @typescript-eslint/explicit-function-return-type
*/

const autoprefixer = require("autoprefixer");
const poststylus = require("poststylus");
const { resolve } = require("path");
const withStylus = require("@zeit/next-stylus");

module.exports = withStylus({
  webpack: (config) => {
    // src ディレクトリをエイリアスのルートに設定
    config.resolve.alias["~"] = resolve(__dirname, "src");
    return config;
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  stylusLoaderOptions: {
    use: [
      poststylus([
        autoprefixer({
          grid: true,
          flexbox: true,
        }),
      ]),
    ],
  },
});
