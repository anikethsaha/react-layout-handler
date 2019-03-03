const path = require('path');

module.exports = {
    entry: path.join(__dirname, "src/index.js"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "app.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    devServer: {
        port: 3001
    }
};