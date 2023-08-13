const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
    target: 'node',
    externals: [nodeExternals()],
    entry: { app: ['./polyfills.js', './index.js'], },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'server.js'
    },

    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },


    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),

        new webpack.DefinePlugin({
            'process.platform': JSON.stringify(process.platform)
        }),
    ],

};

