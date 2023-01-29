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

    // When the webpack has the "optimization" configurations, he stop to apply your default optimization for the files, like the JS bundles
    optimization: { // Configurations of optimization, like the "css-minimizer-webpack-plugin"
        minimize: true,
        minimizer: [
            new CssMinimizerWebpackPlugin(),
            "...", // This tells webpack to apply the default minimization when the bundle is generated
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/src/app.html",
            filename: "app.html",
            hash: true,
        }),
        new MiniCssExtractPlugin(), // Make the plugin available
        new webpack.optimize.ModuleConcatenationPlugin(), // Apply more optimization for the bundle files
    ],
};