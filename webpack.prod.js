const { aliases, scssAliases, onwarn } = require('./webpack.parts')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const magicImporter = require('node-sass-magic-importer')

/**
    merge.smart replaces matches
    You can debug the output using
        console.dir(config, { depth: null });
    ref: https://github.com/survivejs/webpack-merge
*/
let config = merge.smart(common, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.svelte$/,
                use: {
                    loader: 'svelte-loader',
                    options: {
                        emitCss: true,
                        hotReload: false,
                        onwarn: onwarn,
                        preprocess: require('svelte-preprocess')({
                            scss: {
                                importer: [
                                    // scssAliases(aliases),
                                    magicImporter(),
                                ],
                            },
                        }),
                    },
                },
            },
            {
                test: /\.(scss|sass|css)$/,
                use: [
                    /**
                     * MiniCssExtractPlugin doesn't support HMR.
                     * For developing, use 'style-loader' instead.
                     * */
                    MiniCssExtractPlugin.loader,
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
})
//console.dir(config, { depth: null });
module.exports = config
