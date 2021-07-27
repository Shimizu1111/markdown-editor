const path = require('path')

module.exports = {
  // エントリーポイントとなるファイル、このファイルから処理がスタートする
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        // ?とはxの有無は任意という意味、.tsか.tsxのファイルをjsにコンパイルする対象とする
        test: /\.tsx?$/,
        use: 'ts-loader',
        // このファイルは除外する
        exclude: '/node_modules',
      },
    ],
  },
  //モジュールとして解決するファイルの拡張子を指定
  // srcのjsかtsかtsxを読み込んで、tsとtsxに関してはdistフォルダの中のindex.jsに全て出力する
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  // buildの出力先
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: 'dist/',
  }
}


