const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const glob = require('glob');
const fs = require('fs');
const process = require('process');
const pkg = require('./package.json');
const _ = require('lodash');

const babelQuery = {
    presets: ['es2015', 'stage-0', 'react'],
    plugins: [
        'add-module-exports',
        'transform-object-assign',
        'transform-react-display-name',
        'transform-es3-property-literals',
        'transform-es3-member-expression-literals',
        ['transform-es2015-classes', {loose: true}],
        'transform-proto-to-assign'
    ]
};

const srcPath = path.resolve(__dirname, './src');
const pagePath = path.resolve(__dirname, './page');
const buildPath = path.resolve(__dirname, './build');

const entryPages = {
    index: [path.join(__dirname, './src/index.jsx')]
};

const config = {
    target: "web",
    context: srcPath,
    entry: entryPages,
    output: {
        path: buildPath,
        filename: '[name].js',
        publicPath: '../build/'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname, 'src'),
            "node_modules"
        ]
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: babelQuery
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/i,
                use: ExtractTextPlugin.extract(['css-loader', 'less-loader'])
            }
        ]
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ProgressPlugin((percentage, msg)=>{
            const stream = process.stderr;
            if(stream.isTTY && percentage < 0.71) {
                stream.cursorTo(0);
                stream.write('processing: ' + msg);
                stream.clearLine(1);
            }
        }),
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: false,
            allChunks: true
        })
    ]
};

const dev = ()=> {
    const _config = _.cloneDeep(config);
    _config.plugins.push(
        new webpack.SourceMapDevToolPlugin({})
    );
    return _config;
}
const build = ()=> {
    const _config = _.cloneDeep(config);
    _config.watch = false;
    _config.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            compress: {warning: false},
            output: {comments: false}
        })
    );
    return _config;
}

module.exports = {
    build,
    dev
}