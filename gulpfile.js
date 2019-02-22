const gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');


gulp.task('styles', function(){
  return  gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'))
})

gulp.task('watch', function(){
    gulp.watch('./app/assets/styles/**/*.css',gulp.series('styles'))
})

