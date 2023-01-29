const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app/src/js/app.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "app/dist"),
        clean: true,
    },
    module: { // Configures the modules, add the configurations to them
        rules: [ // Defines the rules to the module
            {
                test: /\.css$/, // Regex that will be used to define which files will apply this rule
                use: [ // If true, use the package name inside the "[]"
                    "style-loader",
                    "css-loader", // Extract the CSS inside the script and export to an <style> tag in the DOM page dynamically
                ],
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/src/app.html",
            filename: "app.html",
            hash: true,
        }),
    ],
};