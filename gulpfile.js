const gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
browserSync = require('browser-sync').create();





gulp.task('styles', function(){
  return  gulp.src('./app/assets/styles/styles.css')
  .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
  .pipe(gulp.dest('./app/temp/styles'))
  .pipe(browserSync.stream());
})


gulp.task('watch', function(){


  browserSync.init({
    notify :false,
    server: {
      baseDir: 'app'
    }
});
   
    gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles'));
    gulp.watch("app/*.html").on('change', browserSync.reload);
})

