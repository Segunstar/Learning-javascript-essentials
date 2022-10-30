/* eslint-disable no-undef */
const gulp = require("gulp");
const babel = require("gulp-babel");
const gulpESLintNew = require("gulp-eslint-new");

gulp.task("default", async function () {
  // Run ESLint
  gulp.src(["es6/**/*.js", "public/es6/**/*.js"])
    // .pipe(eslint())
    // .pipe(eslint.format())
    .pipe(gulpESLintNew({ fix: true }))     // Lint files, create fixes.
    .pipe(gulpESLintNew.fix())              // Fix files if necessary.
    .pipe(gulpESLintNew.format())           // Output lint results to the console.
    .pipe(gulpESLintNew.failAfterError());
  // Node source
  gulp.src("es6/**/*.js")
  .pipe(babel())
  .pipe(gulp.dest("dist"));
  // browser source
  gulp.src("public/es6/**/*.js").pipe(babel()).pipe(gulp.dest("public/dist"));
});
