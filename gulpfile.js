var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var webserver = require('gulp-webserver');

gulp.task('start:webserver', function() {
    gulp.src('./app')
        .pipe(webserver({
            livereload: true,
            open: true,
            port:9999
        }));
});

gulp.task('start:server1', function () {
    nodemon({
        script: "colorTv-BE/server.js",
        ext: "js"
    });
});

gulp.task('run', [ 'start:server1', 'start:webserver']);
gulp.task('default', ['run']);