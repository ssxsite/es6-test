module.exports = {
    mode:'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        filename: "./build/[name].js",
        path:__dirname
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }            
        ]
    }
};
