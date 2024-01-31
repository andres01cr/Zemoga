const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = function (env, argv) {
    const isProductionEnv = argv.mode === 'production';

    /** @type { import('webpack').Configuration } */
    const config = {
        output: {
            path: path.resolve(__dirname, 'dist'),
        },
        module: {
            rules: [
                {
                    test: /\.(t|j)sx?$/,
                    exclude: /(node_modules)/,
                    use: { loader: 'swc-loader' },
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/inline',
                },
                {
                    test: /\.(t|j)sx?$/,
                    enforce: 'pre',
                    use: ['source-map-loader'],
                    include: /(@scheinone)/,
                },
            ],
        },
        resolve: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
            alias: {
                '@asset': path.resolve(__dirname, './public/assets'),
                '@': path.resolve(__dirname, './src'),
            },
        },
    };


        Object.assign(config, {
            devtool: 'eval-source-map',
            entry: {
                index: './src/index.tsx',
            },
            output: Object.assign(config.output, {
                filename: 'index.js',
            }),
            plugins: [
                new HtmlWebpackPlugin({
                    template: path.resolve(__dirname, 'public/index.html'),
                }),
            ],
            devServer: {
                static: path.resolve(__dirname, './public'),
                historyApiFallback: true,
                port: 3007,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            },
        });

    return config;
};
