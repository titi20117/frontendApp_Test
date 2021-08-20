const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

gulp.task('sass', () => {
    return gulp
        .src('./sass/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css'));
  });

gulp.task('watch', () => {
    gulp.watch('./sass/styles/**/*.scss', gulp.series('sass'));
});
