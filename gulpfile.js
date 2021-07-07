var gulp = require("gulp");
var sass = require("gulp-sass")(require("sass"));
const babel = require("gulp-babel");
var path = require("path");
var del = require("del");

const rootPath = process.cwd();
const basePath = path.resolve(rootPath, "components");
const sassPath = path.resolve(basePath, "**/*.scss");
const tsCodePath = path.resolve(basePath, "**/*.tsx");
const buildPath_ES = path.resolve(rootPath, "es");
const buildPath_LIB = path.resolve(rootPath, "lib");

const clean = (cb) => {
  return del([buildPath_ES, buildPath_LIB], cb);
};

const scss = () => {
  return gulp
    .src(sassPath)
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest(buildPath_ES))
    .pipe(gulp.dest(buildPath_LIB));
};

const tsbuild = () => {
  return gulp
    .src(tsCodePath)
    .pipe(
      babel({
        presets: ["@babel/preset-react","@babel/preset-typescript"],
      })
    )
    .pipe(gulp.dest(buildPath_ES))
    .pipe(gulp.dest(buildPath_LIB));
};


const watch = function () {
  gulp.watch(sassPath, ["scss"]);
};
 

exports.scss = scss
exports.clean = clean
exports.tsbuild = tsbuild
exports.watch = watch

exports.default = gulp.series(clean, tsbuild, scss);
