const configs = require('./webpack.config.js');
const webpack = require('webpack');
const connect = require('gulp-connect');
const open = require('open');
const gulp = require('gulp');
const gutil = require('gulp-util');

gulp.task('default', ()=> {
    const devConfig = configs.dev();
    let buildFirstTime = true;
    webpack(devConfig, (err, stats)=> {
        if(err) {
            gutil.log(err);
        }
        gutil.log(stats.toString({
            colors: true,
            chunks: false
        }))
        if(buildFirstTime) {
            buildFirstTime = false;
            connect.server({
                name: 'gallery',
                root: ['./'],
                port: 9527,
                livereload: true
            });
            open('http://localhost:9527/page/index.html');
        }
    })
});

gulp.task('build', ()=> {
    const buildConfig = configs.build();
    webpack(buildConfig, (err, stats)=> {
        if(err) {
            gutil.log(err);
        }
        gutil.log(stats.toString({
            colors: true,
            chunks: false
        }))
    });
})