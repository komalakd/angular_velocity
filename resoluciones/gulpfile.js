var gulp = require('gulp'),
    concat = require('gulp-concat'),
    html2js = require('gulp-html2js'),
    del = require('del'),
    inject = require('gulp-inject'),
    wrap = require('gulp-wrap'),
    ngAnnotate = require('gulp-ng-annotate'),
    gutil = require('gulp-util'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    ngConstant = require('gulp-ng-constant');

var basePaths = {
    templates: 'app/**/*.html',
    index: 'index.html',
    scripts: '**/*.js',
    styles: '**/*.css',
    images: '**/*.gif',
    data: '**/*.json',
};

var prod = gutil.env.prod,
    paths = {
        src: './src',
        build: !prod ? './build' : './dist',
    };

Object.keys(basePaths).forEach(function(key) {
    paths[key] = paths.src + '/' + basePaths[key];
});

gulp.task('clean', function() {
    return del([paths.build]);
});

gulp.task('config', function() {
    gulp.src('config.json')
        .pipe(ngConstant({
            name: 'appConfig',
            constants: {
                debug: !prod
            }
        }))
        .pipe(gulp.dest(paths.build));
})

gulp.task('copy-scripts', ['config'], function() {
    return gulp.src([paths.scripts, paths.build + '/config.js'])
        .pipe(wrap('(function(){\n\t"use strict";\n\n<%= contents %>\n\n})();'))
        .pipe(ngAnnotate())
        .pipe(prod ? uglify() : gutil.noop())
        .pipe(prod ? concat('app.min.js') : gutil.noop())
        .pipe(gulp.dest(paths.build));
});

gulp.task('copy-styles', function() {
    return gulp.src(paths.styles)
        .pipe(prod ? concat('app.min.css') : gutil.noop())
        .pipe(gulp.dest(paths.build));
});

gulp.task('copy-images', function() {
    return gulp.src(paths.images)
        .pipe(gulp.dest(paths.build));
});

gulp.task('copy-data', function() {
    return gulp.src(paths.data)
        .pipe(gulp.dest(paths.build));
});

gulp.task('templates', function() {
    return gulp.src(paths.templates)
        .pipe(html2js({
            outputModuleName: 'app-templates',
            useStrict: true,
            base: 'src'
        }))
        .pipe(concat('app-templates.js'))
        .pipe(prod ? uglify() : gutil.noop())
        .pipe(gulp.dest(paths.build))
});

gulp.task('index', ['templates', 'copy-scripts', 'copy-styles'], function() {
    var toInject = [
        paths.build + '/app-templates.js',
        paths.build + '/**/*.js',
        paths.build + '/**/*.css'
    ];
    if (prod) //config already included in prod
        toInject.push('!' + paths.build + '/config.js'); 
    console.log(toInject);
    return gulp.src(paths.index)
        .pipe(inject(gulp.src(toInject)))
        .pipe(gulp.dest(paths.build));
});

gulp.task('watch', function() {
    gulp.watch([paths.templates, paths.scripts, paths.styles, paths.index], ['index']);
    gulp.watch(paths.images, ['copy-images']);
    gulp.watch(paths.data, ['copy-data']);
});

gulp.task('copy-assets', ['copy-images', 'copy-data']);
gulp.task('build',  ['index', 'copy-assets']);
gulp.task('default', ['watch', 'build']);