const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const SpritesmithPlugin = require('webpack-spritesmith');

// 雪碧图生成方法
const templateFunction = function (data) {
    var shared = '.ico { background-image: url(I) }'
        .replace('I', data.sprites[0].image);

    var perSprite = data.sprites.map(function (sprite) {
        return '.ico-N { width: Wpx; height: Hpx; background-position: Xpx Ypx; }'
            .replace('N', sprite.name)
            .replace('W', sprite.width)
            .replace('H', sprite.height)
            .replace('X', sprite.offset_x)
            .replace('Y', sprite.offset_y);
    }).join('\n');

    return shared + '\n' + perSprite;
};

// 多入口
let entry = {
    home: 'src/js/home/home.js',
    about: 'src/js/about/about.js',
    fba: 'src/js/fba/fba.js',
    campus: 'src/js/campus/campus.js',
    intl: 'src/js/intl/intl.js',
    contact: 'src/js/contact/contact.js',
}

module.exports = evn => ({
    mode: evn.production ? 'production' : 'development',
    // 给每个入口 path.reslove
    entry: Object.keys(entry).reduce((obj, item) => (
        obj[item] = path.resolve(entry[item])) && obj, {}
    ),
    output: {
        path: path.resolve('dist'),
        publicPath: '/',
        filename: 'js/[name]_[hash:8].js',
        chunkFilename: 'js/[name]_[hash:8].js'
    },
    externals: {
        jquery: "window.$",
    },
    module: {
        rules: [
            { // bable 根据需要转换到对应版本 
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            { // 转换less 并交给MiniCssExtractPlug插件提取到单独文件
                test: /\.less$/,
                loader: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
                exclude: /node_modules/
            },
            // {
            //     test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            //     loader: require.resolve('url-loader'),
            //     options: {
            //         limit: 2048, // 2k
            //         name: 'images/[name].[hash:8].[ext]'
            //     }
            // },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: './font',
                    }
                }]
            },
        ]
    },
    plugins: [
        // 删除上一次打包目录(一般来说删除自己输出过的目录 )
        new CleanWebpackPlugin(['dist', 'views/_layout'], {
            // 当配置文件与package.json不再同一目录时候需要指定根目录
            root: path.resolve()
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name]_[contenthash:8].css",
            chunkFilename: "[id]_[contenthash:8].css"
        }),
        // 将src下的图片资源平移到dist目录
        new CopyWebpackPlugin(
            [
                {
                    from: path.resolve('src/images'),
                    to: path.resolve('dist/images')
                },
                {
                    from: path.resolve('src/js/lib'),
                    to: path.resolve('dist/js/lib')
                }
            ]),
        // HtmlWebpackPlugin 每个入口生成一个html 并引入对应打包生产好的js
        ...Object.keys(entry).map(item => new HtmlWebpackPlugin({
            // 模块名对应入口名称
            chunks: [item],
            // 输入目录 (可自行定义 这边输入到views下面的_layout)
            filename: path.resolve('views/_layout/' + entry[item].split('/').slice(-2).join('/').replace('js', 'html')),
            // 基准模板
            template: path.resolve('src/template.html')
        })),
        // // 雪碧图设置
        // new SpritesmithPlugin({
        //     src: {
        //         cwd: path.resolve(__dirname, 'src/images/sprites/'), // 图标根路径
        //         glob: '**/*.png' // 匹配任意 png 图标
        //     },
        //     target: {
        //         image: path.resolve(__dirname, 'dist/images/spritesGenerated/sprites_[hash:8].png'), // 生成雪碧图目标路径与名称
        //         // 设置生成CSS背景及其定位的文件或方式
        //         css: [
        //             [path.resolve(__dirname, 'css/sprites-generated.css'), {
        //                 format: 'function_based_template'
        //             }]
        //         ]
        //     },
        //     spritesmithOptions: {
        //         padding: 4
        //     },
        //     customTemplates: {
        //         'function_based_template': templateFunction
        //     },
        //     apiOptions: {
        //         cssImageRef: "../images/spritesGenerated/sprites_[hash:8].png" // css文件中引用雪碧图的相对位置路径配置
        //     }
        // }),
    ],
});