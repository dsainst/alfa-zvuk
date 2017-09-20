var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss = require('gulp-concat-css'),
    minifyCss = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    rev_append = require('gulp-rev-append'),
    livereload = require('gulp-livereload'),
    spritesmith = require('gulp.spritesmith'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    gutil = require('gulp-util'),
    browserSync = require('browser-sync').create();

gulp.task('default', ['browser-sync'], function () {
    gulp.watch('dev/template/css/**/*.less', ['less']);
    gulp.watch('dev/template/js/*.js', ['js']);
    gulp.watch('dev/index.html', ['rev_append']);
    gulp.watch('dev/template/img/*', ['sprite']);
    gulp.watch('dev/template/img/svg/*', ['svg_sprite']);
    gulp.watch('dev/template/image/*', ['image']);
});

// less process...
gulp.task('less', ['css'], function () {
    return gulp.src('dev/template/css/**/*.less')
        .pipe(less());
});

gulp.task('css', function () {
    return gulp.src('dev/template/css/**/*.css')
        .pipe(gulp.dest('dev/template/css/'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(concatCss("style.min.css"))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest('tpl/css/'))
        .pipe(livereload()); // inject into browsers;
});
// html process...
gulp.task('rev_append', function () {
    return gulp.src('dev/index.html')
        .pipe(rev_append())
        .pipe(gulp.dest(''))
        .pipe(livereload());
});

// image process...
gulp.task('image', function () {
    return gulp.src('dev/template/image/*')
        .pipe(gulp.dest('tpl/img'))
        .pipe(livereload());
});

// sprite process...
gulp.task('sprite', function () {
    var spriteData = gulp.src('dev/template/img/*.png').pipe(spritesmith({
        imgName: 'img/sprite.png',
        cssName: 'css/sprite.css'
    }));
    return spriteData.pipe(gulp.dest('tpl/'));
});

gulp.task('svg_sprite', function () {
    return gulp
        .src('dev/template/img/svg/**/*.svg')
        .pipe(gulp.dest('tpl/img/svg'));
});

// js process...
gulp.task('js', function () {
    return gulp.src('dev/template/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('tpl/js/'));
});

gulp.task('browser-sync', function () {
    var files = [
        '*.html',
        'tpl/css/*.css',
        'tpl/img/*',
        'tpl/js/*.js'
    ];

    browserSync.init(files, {
        server: {
            baseDir: './'
        }
    });
});
