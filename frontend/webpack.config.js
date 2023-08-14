const path = require("path");
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = {

    target: 'web',
    entry: { app: ['./pages/index.jsx'],},
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },

    plugins: [
        new webpack.ProvidePlugin({
            process: 'process/browser',
        }),

        new webpack.DefinePlugin({
            'process.platform': JSON.stringify(process.platform)
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"],
                    },
                },
            },
        ],
    },
    resolve: {

        fallback: {
            "util": require.resolve("util/"),
            "buffer": require.resolve("buffer/"),
            "url": require.resolve("url/"),
            "path": require.resolve("path-browserify"),
            "assert": require.resolve("assert/"),
            "stream": require.resolve("stream-browserify"),
            "querystring": require.resolve("querystring-es3"),
            "http": require.resolve("stream-http"),
            "pg-hstore": false,
            "crypto": false,
            "zlib": false,
            "fs": false,
            "net": false,
            "async_hooks": false,
        },
        extensions: [".js", ".jsx"],
    },
};
