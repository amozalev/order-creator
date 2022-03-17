const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const port = process.env.PORT || 3000;

module.exports = (env, argv) => {
    const plugins = [
        new HTMLWebpackPlugin({
            template: './public/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': JSON.stringify(process.env)
        }),
    ];

    return {
        mode: 'development',
        entry: './src/index.tsx',
        output: {
            filename: 'bundle.js',
            path: path.resolve('dist'),
            publicPath: '/'
        },
        module: {
            rules: [
                // {
                //     test: /\.js$/,
                //     include: /node_modules\/react-dom/,
                //     use: ['react-hot-loader/webpack']
                // },
                {
                    test: /\.(js|tsx|ts)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.html$/,
                    use: 'html-loader'
                },
                /*Choose only one of the following two: if you're using
                plain CSS, use the first one, and if you're using a
                preprocessor, in this case SASS, use the second one*/
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                },
                {
                    test: /\.scss$/,
                    use: ['style-loader', 'css-loader', 'sass-loader']
                }
            ]
        },
        plugins,
        devServer: {
            host: '0.0.0.0',
            port: port,
            historyApiFallback: true,
            hot: true,
            // watchOptions: {
            //     aggregateTimeout: 0,
            //     poll: 1000
            // },
            compress: true,
            allowedHosts: ['all']
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx', '.json', '.css', '.html']
        }
    };
};
