const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// const SpritesmithPlugin = require('webpack-spritesmith');

// Path
// const APP_PATH = __dirname.match('(.*)skin.*')[1];
// const TMPL_PATH = path.resolve(APP_PATH, 'app/design/frontend/PlumTree/ba_mb/template'); 


module.exports = {
  entry: {
    vendor:[
      'vue',
      'vuex',
      'fastclick'
    ],
    app: path.join(__dirname, 'src/main'),
    // head: path.join(__dirname, 'src/component/headComponet'),
    head: path.join(__dirname, 'src/component/headOutput/headComponet'),
    login: path.join(__dirname, 'src/component/loginOutput/login'),
    register: path.join(__dirname, 'src/component/registerOutput/register'),
    registerEm: path.join(__dirname, 'src/component/registerOutput/registerEm'),
    bindphone: path.join(__dirname, 'src/component/registerLoginExtraOutput/bindPhone'),
    findpsw: path.join(__dirname, 'src/component/registerLoginExtraOutput/findPsw'),
    findpsw2: path.join(__dirname, 'src/component/registerLoginExtraOutput/findPsw2'),
    resetPsw: path.join(__dirname, 'src/component/registerLoginExtraOutput/resetPsw'),
    userCenter: path.join(__dirname, 'src/component/userCenter/userCenter'),
    changePsw: path.join(__dirname, 'src/component/userCenter_changePswOutput/changePassword'),
    help: path.join(__dirname, 'src/component/userCenter/help')
  },
  output: {
    path: path.join(__dirname, '/dist/'),
    // publicPath: '/dist/',
    publicPath: '/src/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
        }
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
        use: [ 'style-loader', 'css-loader','postcss-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|eot|svg|ttf|gif|woff2?)$/,
        loader: 'url-loader',
        options: {
          limit: 8192,
          name: '/assets/img/[name].[ext]'
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
  devtool: '#eval-source-map',

  plugins: [

      new webpack.optimize.CommonsChunkPlugin({
            names:'vendor',
            filename:'vue.fastclick.js',
            minChunks: function (module) { // 通过npm 安装到node_modules目录的库
              return module.context && module.context.indexOf("node_modules") !== -1;
            }
      }),
      new ExtractTextPlugin({ 
          filename: '/assets/css/[name]_[chunkhash].css'
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/register.html',
          filename: '_register.html',
          chunks:['register','head'],
          chunksSortMode: function (a, b) {//控制js加载顺序 ['register','head']
            if (a.names[0] > b.names[0]) {
              return 1;
            }
            if (a.names[0] < b.names[0]) {
              return -1;
            }
            return 0;
          },
          title:'手机注册',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/registerEm.html',
          filename: '_registerEm.html',
          chunks:['registerEm','head'],
          chunksSortMode: function (a, b) {//控制js加载顺序 ['register','head']
            if (a.names[0] > b.names[0]) {
              return 1;
            }
            if (a.names[0] < b.names[0]) {
              return -1;
            }
            return 0;
          },
          title:'邮箱注册',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/bindphone.html',
          filename: '_bindphone.html',
          chunks:['bindphone','head'],
          title:'绑定手机号',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/login.html',
          filename: '_login.html',
          chunks:['login','head'],
          title:'登录',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/findpsw.html',
          filename: '_findpsw.html',
          chunks:['findpsw','head'],
          title:'找回密码',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/findpsw2.html',
          filename: '_findpsw2.html',
          chunks:['findpsw2','head'],
          title:'找回密码2',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/resetpsw.html',
          filename: '_resetpsw.html',
          chunks:['resetPsw','head'],
          title:'重设密码',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/userCenter_changePsw.html',
          filename: '_userCenter_changePsw.html',
          chunks:['changePsw','head'],
          title:'修改密码',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/userCenter.html',
          filename: '_userCenter.html',
          chunks:['userCenter','head'],
          title:'用户中心首页',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/userCenter_help.html',
          filename: '_userCenter_help.html',
          chunks:['help','head'],
          title:'帮助中心',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/userCenter_setting.html',
          filename: '_userCenter_setting.html',
          chunks:['help','head'],
          title:'用户设置',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/userCenter_security.html',
          filename: '_userCenter_security.html',
          chunks:['help','head'],
          title:'安全中心',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/order_waiting.html',
          filename: '_order_waiting.html',
          chunks:['help','head'],
          title:'待付款',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/order_send.html',
          filename: '_order_send.html',
          chunks:['help','head'],
          title:'已发货',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/order_pay.html',
          filename: '_order_pay.html',
          chunks:['help','head'],
          title:'已付款',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/browsing.html',
          filename: '_browsing.html',
          chunks:['help','head'],
          title:'浏览足迹',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/collection.html',
          filename: '_collection.html',
          chunks:['help','head'],
          title:'收藏夹',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/coupon.html',
          filename: '_coupon.html',
          chunks:['help','head'],
          title:'优惠券-已使用',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/coupon2.html',
          filename: '_coupon2.html',
          chunks:['help','head'],
          title:'优惠券-未使用',
          hash: false
      }),
      new HtmlWebpackPlugin({
          template: './src/dev-pages/myorder.html',
          filename: '_myorder.html',
          chunks:['help','head'],
          title:'优惠券-未使用',
          hash: false
      })


  ]
}

