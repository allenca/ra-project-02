
var gulp = require('gulp');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task("scss", function(){
	gulp.src("./src/scss/app.scss")
	.pipe(sass().on("error", sass.logError))
	.pipe(uglifycss({
		"maxLineLen": 100000,
		"uglyComments": true
    }))
    .pipe(gulp.dest("./dist/css/"));
// tells where to look for files, concats, uglifies, renames, pipes to dist folder
// need to download the plugins before running them
});

gulp.task("watch"),function(){
	gulp.watch("src/scss/*.scss",["scss"]);
};