const path = require("path"); // Library to manage directories path

module.exports = {
    entry: "./app/src/js/app.js", // Set the start file to will load
    // When the Webpack build the files, the mode of the building generator is not seted of default
    output: {
        filename: "bundle.js", // The name's file of the generated file
        path: path.resolve(__dirname, "app/dist"), // Path of the generated file
    }
};