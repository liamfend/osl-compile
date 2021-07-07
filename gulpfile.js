var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
var path = require("path");

const basePath = path.resolve(process.cwd(), "components");
const sassPath = path.resolve(basePath, "**/*.scss");
const buildPath_ES = path.resolve(basePath, "es");

function buildStyles() {
  console.log('buildStyles')
  return gulp
    .src(sassPath)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(buildPath_ES));
}

exports.buildStyles = buildStyles;
exports.watch = function () {
  gulp.watch(sassPath, ["sass"]);
};
