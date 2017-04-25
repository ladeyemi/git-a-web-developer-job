var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require ('browser-sync').create(); /* browserSync is pretty amazing can be used for cross browser testing and also mobile testing using the external link generated!! Also very nice to be able to update CSS without need of a reload */



gulp.task('watch', function() {
browserSync.init ({
notify: false,   /* (Can turn on/off injection with this) */
  server: {
    baseDir: "app"
  }
});

watch('./app/index.html', function() {
browserSync.reload();

});

watch('./app/assets/styles/**/*.css', function() {
gulp.start('cssInject');

});

watch('./app/assets/scripts/**/*', function () {
  gulp.start('scriptsRefresh');
})

});

gulp.task ('cssInject', ['styles'],function() {
  return gulp.src('./app/temp/styles/styles.css')
  .pipe(browserSync.stream());
});

gulp.task('scriptsRefresh', ['scripts'], function () {
  browserSync.reload();
})
