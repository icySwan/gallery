const configs = require('./webpack.config.js');
const webpack = require('webpack');
const connect = require('gulp-connect');
const open = require('open');

gulp.task('default', ()=> {
    const devConfig = configs.dev();
    let buildFirstTime = true;
    webpack(devConfig, ()=> {
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
    webpack(buildConfig, ()=> {});
})