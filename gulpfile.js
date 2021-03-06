/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require("gulp");
var ts = require("gulp-typescript");
var imagemin = require("gulp-imagemin");
var filter = require("gulp-filter");
var newer = require("gulp-newer");
var uglify = require("gulp-uglify");
var pump = require("pump");
var stripBom = require("gulp-stripbom");

gulp.task("default", ["copyBootstrapFiles","buildTypescript","images","compress","removeBom"], function () {
    // place code for your default task here
});

gulp.task("copyBootstrapFiles", function () {
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

//Compress all images
gulp.task("images", function () {
    var allFilter = filter(["**/*.jpeg", "**/*.gif", "**/*.jpg", "**/*.png"], { restore: true });

    return gulp.src("content/imagesOriginal/**/*")
        .pipe(newer("content/images"))
        .pipe(allFilter)
        .pipe(imagemin())
        .pipe(allFilter.restore)
        .pipe(gulp.dest("content/images"))
});

//Compress all javascript files
gulp.task("compress", function (cb) {
    pump([
          gulp.src("'scripts/**/*"),
          uglify(),
          gulp.dest("scripts")
    ],
      cb
    );
});

//Remove the byte order mark from all files
gulp.task("removeBom", function () {
    return gulp.src("**!(.sln)/*!(.sln)")
            .pipe(stripBom())
            .pipe(gulp.dest("."));
});