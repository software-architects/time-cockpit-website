/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");

gulp.task("default", ["copyBootstrapFiles"], function () {
    // place code for your default task here
});

gulp.task("copyBootstrapFiles", function () {
	gulp.src("./node_modules/bootstrap-sass/assets/stylesheets/**/*.*")
		.pipe(gulp.dest("./_sass/bootstrap"));
});