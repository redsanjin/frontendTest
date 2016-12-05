var gulp = require('gulp'),
    cssmin = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('cssMin', function () {
    gulp.src('src/css/*.css')
        .pipe(cssmin({
            advanced: false,//类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie7',//保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: false,//类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'
            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('dist/css'));
});

gulp.task('imagesMin', function () {
    gulp.src('src/images/*.{png,jpg,gif,ico}')
        .pipe(imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
        }))
        .pipe(gulp.dest('dist/images'));
});


gulp.task('jsMin', function () {
    gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('jsConcat', function () {
    gulp.src('dist/js/*.js')
        .pipe(concat('all.js'))//合并后的文件名
        .pipe(gulp.dest('dist/js'));
});

// Rerun the task when a file changes
gulp.task('watch', function() {
  gulp.watch('src/css/*.css', ['cssMin']);
  gulp.watch('src/images/*.{png,jpg,gif,ico}', ['imagesMin']);
  gulp.watch('src/js/*.js', ['jsMin']);
  gulp.watch('dist/js/*.js', ['jsConcat']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['cssMin', 'imagesMin', 'jsMin']);
