const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ChunkManifestPlugin = require('chunk-manifest-webpack-plugin');

const SpritesmithPlugin = require('webpack-spritesmith');
// Path
const APP_PATH = __dirname.match('(.*)skin.*')[1];
const TMPL_PATH = path.resolve(APP_PATH, 'app/design/frontend/PlumTree/ba_mb/template');


module.exports = {
  entry: {
    vendor: [
      'vue',
      'vuex',
      'fastclick',
      'axios',
      'qs'
    ],
    app: path.join(__dirname, 'src/main'),
    head: path.join(__dirname, 'src/component/headOutput/headComponet'),
    login: path.join(__dirname, 'src/component/loginOutput/login'),
    register: path.join(__dirname, 'src/component/registerOutput/register'),
    registerEm: path.join(__dirname, 'src/component/registerOutput/registerEm'),
    usercenter: path.join(__dirname, 'src/component/userCenter/userCenter'),
    changePsw: path.join(__dirname, 'src/component/userCenter_changePswOutput/changePassword'),
    findpsw_1: path.join(__dirname, 'src/component/registerLoginExtraOutput/findPsw'),
    findpsw_2: path.join(__dirname, 'src/component/registerLoginExtraOutput/findPsw2'),


  },
  output: {
    path: path.join(__dirname, '/dist/'),
    publicPath: '/skin/frontend/PlumTree/ba_mb/ss_Server/dist/',
    // filename: '[name]_[chunkhash].js'
    filename: '[name].js' //用于fiddler
    // ,chunkFilename: "[name].js"
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: ExtractTextPlugin.extract({
              use: ['css-loader', 'postcss-loader', 'sass-loader'],
              fallback: 'vue-style-loader'
            }),
            css: ExtractTextPlugin.extract({
              use: ['css-loader', 'postcss-loader', 'sass-loader']
            }),
            sass: ExtractTextPlugin.extract({
              use: ['css-loader', 'postcss-loader', 'sass-loader'],
              fallback: 'vue-style-loader'
            })
          }
        }
        // options: {
        //   loaders: {
        //     'scss': 'vue-style-loader!css-loader!sass-loader',
        //     'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
        //   }
        // }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules)/,
        options: {
          presets: ['env'],
          plugins: ['syntax-dynamic-import']
        }
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ['css-loader', 'postcss-loader', 'sass-loader']
        })
      },
      {
        test: /\.(png|jpe?g|eot|svg|ttf|gif|woff2?)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '/assets/img/[name]_[hash].[ext]'
        }
      }
    ],

  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    modules: ["node_modules", "spritesmith-generated"]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#source-map',
  plugins: [
    new CleanWebpackPlugin(['dist']), // 清理dist 文件夹
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    // 暂时不压缩用于开发
    // new webpack.optimize.UglifyJsPlugin({
    //     sourceMap: false,
    //     compress: {
    //       warnings: false
    //     }
    // }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vendor',
      filename: 'vue.fastclcik.js',
      minChunks: Infinity
    }),
    // new SpritesmithPlugin({
    //     src: {
    //       cwd: path.resolve(__dirname, 'src/assets/img/icon/'),
    //       glob: '*.png'
    //     },
    //     target: {
    //       image: path.resolve(__dirname, 'dist/assets/aaa/sprite.png'),
    //       css: path.resolve(__dirname, 'dist/assets/aaa/sprite.css')
    //     },
    //     apiOptions: {
    //       cssImageRef: '../images/sprite.png'
    //     },
    //     spritesmithOptions: {
    //       algorithm: 'top-down'
    //     }
    // }),
    new ExtractTextPlugin({
      filename: '/assets/css/[name]_[chunkhash].css'
    }),
    new HtmlWebpackPlugin({
      template: './index_build.html',
      filename: '_index.html',
      chunks: ['app'],
      title: '首页',
      hash: false
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(TMPL_PATH, 'page/html/webpackTmpl/1columnBase.phtml'),
      filename: path.resolve(TMPL_PATH, 'page/html/webpackBuild/_1column.phtml'),
      inject: false
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(TMPL_PATH, 'page/html/webpackTmpl/headBase.phtml'),
      filename: path.resolve(TMPL_PATH, 'page/html/webpackBuild/_head.phtml'),
      chunks: ['head'], //用于加head_.css
      inject: false // 禁用head.js
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(TMPL_PATH, 'page/html/webpackTmpl/loginBase.phtml'),
      filename: path.resolve(TMPL_PATH, 'page/html/webpackBuild/_loginContent.phtml'),
      chunks: ['login'],
      title: '登录',
      hash: false
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(TMPL_PATH, 'page/html/webpackTmpl/registerBase.phtml'),
      filename: path.resolve(TMPL_PATH, 'page/html/webpackBuild/_registerContent.phtml'),
      chunks: ['register'],
      title: '注册',
      hash: false
    }),
     new HtmlWebpackPlugin({
      template: path.resolve(TMPL_PATH, 'page/html/webpackTmpl/registerEmailBase.phtml'),
      filename: path.resolve(TMPL_PATH, 'page/html/webpackBuild/_registerEmailBase.phtml'),
      chunks: ['registerEm'],
      title: '邮箱注册',
      hash: false
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(TMPL_PATH, 'page/html/webpackTmpl/footerBase.phtml'),
      filename: path.resolve(TMPL_PATH, 'page/html/webpackBuild/_footer.phtml'),
      chunks: ['head'], //在页面底部，加载公共header组件【底部加载原因，vue需现在加载组件id】
      inject: false,
      hash: false
    }),
    /* 用户中心 */
    new HtmlWebpackPlugin({
      template: path.resolve(TMPL_PATH, 'page/html/webpackTmpl/headBase.phtml'),
      filename: path.resolve(TMPL_PATH, 'page/html/webpackBuild/_usercenterHeader.phtml'),
      chunks: ['usercenter'],
      title: '用户中心',
      inject: false,
      hash: false
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(TMPL_PATH, 'page/html/webpackTmpl/setpasswordBase.phtml'),
      filename: path.resolve(TMPL_PATH, 'customer/security/setpassword.phtml'),
      chunks: ['changePsw'],
      title: '修改密码',
      hash: false
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(TMPL_PATH, 'page/html/webpackTmpl/findPswBase-1.phtml'),
      filename: path.resolve(TMPL_PATH, 'customer/password/findPwd.phtml'),
      chunks: ['findpsw_1'],
      title: '找回密码-第一步',
      hash: false
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(TMPL_PATH, 'page/html/webpackTmpl/findPswBase-2.phtml'),
      filename: path.resolve(TMPL_PATH, 'customer/password/pwdTypeAuction.phtml'),
      chunks: ['findpsw_2'],
      title: '找回密码-第二步',
      hash: false
    }),

  ]
}

/*===================== 生产环境 ===========================*/
if (process.env.NODE_ENV === 'production') {

  console.log('========= this is <webpack.config.build.js> =============');

}