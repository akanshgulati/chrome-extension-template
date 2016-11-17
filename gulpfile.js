var gulp = require('gulp');
var del = require('del');
var watch = require('gulp-watch');
var zip = require('gulp-zip');

/**
 * CLEAN TASk
 */
gulp.task('clean', function () {
    return del.sync(['dist','prod']);
});

/**
 * COPY TASKS
 */
gulp.task('copy-html', function () {
    return gulp.src('./src/html/*.html', { base: './src/html'})
        .pipe(gulp.dest('./dist/html'));
});
gulp.task('copy-js', function () {
    return gulp.src('./src/js/*.js', { base: './src/js'})
        .pipe(gulp.dest('./dist/js'));
});
gulp.task('copy-css', function () {
    return gulp.src('./src/css/*.css', { base: './src/css'})
        .pipe(gulp.dest('./dist/css'));
});
gulp.task('copy-manifest', function () {
    return gulp.src('./manifest.json', { base: './'})
        .pipe(gulp.dest('dist'));
});
gulp.task('copy-icons', function () {
    return gulp.src('./icons/*.png', { base: './icons'})
        .pipe(gulp.dest('./dist/icons'));
});

/**
 * WATCHERS
 */
 gulp.task('watch-js', function () {
    return watch('./src/js/*.js', {ignoreInitial: false})
        .pipe(gulp.dest('dist/js'));
});

 gulp.task('watch-css', function () {
    return watch('./src/css/*.css', { ignoreInitial: false })
        .pipe(gulp.dest('dist/css'));
});

gulp.task('watch-html', function () {
    return watch('./src/html/*.html', { ignoreInitial: false })
        .pipe(gulp.dest('dist/html'));
});
gulp.task('watch-icons', function () {
    return watch('./src/icons/*.png', { ignoreInitial: false })
        .pipe(gulp.dest('dist/icons'));
});
gulp.task('watch-manifest', function () {
    return watch('manifest.json', { ignoreInitial: false })
        .pipe(gulp.dest('dist/manifest.json'));
});


/**
 * COMBINED TASKS
 */
gulp.task('build-dev', [
    'clean',
    'copy-css',
    'copy-html',
    'copy-icons',
    'copy-js',
    'copy-manifest'
]);

gulp.task('watch', ['watch-js', 'watch-css', 'watch-html']);

gulp.task('watch-all', ['watch-js', 'watch-css', 'watch-html','watch-icons', 'watch-manifest']);