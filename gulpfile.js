/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");
var ts = require('gulp-typescript');

gulp.task("default", ["copyBootstrapFiles","buildTypescript"], function () {
    // place code for your default task here
});

gulp.task("copyBootstrapFiles", function () {
	gulp.src("./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js")
		.pipe(gulp.dest("./scripts"));

	gulp.src("./node_modules/jquery/dist/jquery.js")
		.pipe(gulp.dest("./scripts"));

	return gulp.src("./node_modules/bootstrap-sass/assets/stylesheets/**/*.*")
		.pipe(gulp.dest("./_sass/bootstrap"));
});

gulp.task("buildTypescript", function () {
    return gulp.src('typescript/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            out: "time-cockpit-website.js"
        }))
        .pipe(gulp.dest("scripts"));
});