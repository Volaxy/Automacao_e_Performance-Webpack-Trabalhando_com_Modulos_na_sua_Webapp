const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./app/src/js/app.js",

    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "app/dist"),
        clean: true // Clear the folder and creates again
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/src/app.html", // The template to the generated HTML to base
            filename: "app.html", // File name to be generated
            hash: true // Generates a new hash for each different file created by the webpack to identify the file in the cache, clearing the older "bundle" and replaces with the new file
        })
    ]
};