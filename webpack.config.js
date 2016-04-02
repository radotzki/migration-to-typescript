var path = require('path');

module.exports = {
    entry: "./src/app.ts",
    output: {
        path: __dirname,
        filename: "app.js"
    },
    resolve: { extensions: ['', '.js', '.ts', '.json'] },

    module: {
        loaders: [
            { test: /\.html$/, loader: "raw" },
            {
                test: /\.ts$|\.js$/,
                loader: "awesome-typescript",
                include: path.resolve(__dirname, "src"),
            },
        ]
    }
};