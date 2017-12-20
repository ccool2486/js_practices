const gulp = require('gulp');
const babel = require('gulp-babel');
gulp.task('default', function(){
    
    //node轉換
    gulp.src("es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest('dist'));

    //browser轉換
    gulp.src("public/es6/**/*.js")
        .pipe(babel())
        .pipe(gulp.dest('public/dist'));
});