import gulp from 'gulp';
import concat from 'gulp-concat';
import * as fs from "fs";

gulp.task('js', () => {
    return gulp
        .src('./dist/_astro/*.js')
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./member-app/assets'));
});

gulp.task('css', () => {
    return gulp
        .src('./dist/_astro/*.css')
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./member-app/assets'));
});

gulp.task('html', () => {
    return gulp
        .src('./dist/*.html')
        .pipe(concat('index.html'))
        .pipe(gulp.dest('./member-app/assets'));
});

gulp.task('astro', () => {
    return gulp
        .src('./dist/')
        .pipe(gulp.dest('./member-app/assets/dist'));
});

gulp.task('moveFiles', function () {
    return gulp.src('dist/**/*') // Select all files from 'dist' folder
        .pipe(gulp.dest('member-app/assets')); // Move them to 'assets' folder
});
gulp.task('default', gulp.series('moveFiles'));
