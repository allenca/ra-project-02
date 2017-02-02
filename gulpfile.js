"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename');
var watch = require('gulp-watch');
var sass = require('gulp-sass');

gulp.task("scripts-scss", function(){
	gulp.src("./src/scss/*.scss")
	.pipe(concat("all.scss"))
	.pipe(sass())
	.pipe(uglifycss({
		"maxLineLen": 100000,
		"uglyComments": true
    }))
	.pipe(rename("concated.css"))
    .pipe(gulp.dest("./dist/css/"));
// tells where to look for files, concats, uglifies, renames, pipes to dist folder
// need to download the plugins before running them
});

gulp.task("watch"),function(){
	gulp.watch("src/scss/*.scss",["scripts-scss"]);
};