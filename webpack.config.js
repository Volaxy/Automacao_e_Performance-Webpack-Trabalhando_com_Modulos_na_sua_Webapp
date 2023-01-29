const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const webpack = require("webpack");

module.exports = {
    entry: "./app/src/js/app.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "app/dist"),
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                ],
            }
        ]
    },

    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            "...",
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/src/index.html",
            filename: "index.html",
            hash: true,
        }),
        new MiniCssExtractPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
    ],

    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 3000,
    },
};

// When the command "npm run start" runs, the webpack store the data in the memory of the PC