const extractTextPlugin = require("extract-text-webpack-plugin");
const rules = [{
  test: /\.(css|scss|sass)$/,
  use: process.env.NODE_ENV === "development" ?
    ["style-loader", "css-loader", "sass-loader", "postcss-loader"] :
    extractTextPlugin.extract({
    fallback: "style-loader",
    use: ["css-loader", "sass-loader", "postcss-loader"]
  })
},
  {
    test: /\.js$/,
    use: [{
      loader: "babel-loader"
    }]
  }, {
    test: /\.(png|jpg|gif)$/,
    use: [{
      // 需要下载url-loader
      loader: "url-loader",
      options: {
        limit: 5 * 1024, //小于这个时将会已base64位图片打包处理
      }
    }]
  },
  {
    test: /\.html$/,
    // html中的img标签
    use: {
      loader: 'html-loader',
      options: {
        attrs: ['img:src', 'img:data-src', 'audio:src'],
        minimize: true
      }
    }
  }
];
module.exports = rules;