const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const magicImporter = require('node-sass-magic-importer')

module.exports = merge.smart(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    'style-loader',
                    { loader: 'css-loader', options: { sourceMap: true } },
                    {
                        loader: 'sass-loader',
                        options: {
                            sassOptions: {
                                importer: magicImporter(),
                            },
                        },
                    },
                ],
            },
        ],
    },
    devServer: {
        contentBase: './build',
        port: 4000,
    },
})
