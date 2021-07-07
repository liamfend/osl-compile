var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var path = require("path");
var del = require('del')

const rootPath = process.cwd()
const basePath = path.resolve(rootPath, "components");
const sassPath = path.resolve(basePath, "**/*.scss");
const buildPath_ES = path.resolve(rootPath, "es");
const buildPath_LIB = path.resolve(rootPath, "lib");


const clean = (cb) => {
 return  del([
    buildPath_ES,
    buildPath_LIB
  ],cb)
}

exports.clean = clean 

function buildStyles() {
  
  return gulp
    .src(sassPath)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(buildPath_ES))
    .pipe(gulp.dest(buildPath_LIB));
}

exports.buildStyles = buildStyles;


exports.watch = function () {
  gulp.watch(sassPath, ["sass"]);
};


exports.default = gulp.series(clean, buildStyles);