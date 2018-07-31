const gulp = require( "gulp" );
const concat = require( "gulp-concat" );
const replace = require( "gulp-replace" );

// Paths
const main = "src/**/insertValues.js";
const utils = "src/**/*_.js";
const destination = "dist/";

// Build all
gulp.task( "build", ["main", "utils"] );

// Build main
gulp.task( "main", function () {
  return gulp
    .src( main )
    .pipe( replace( /module.exports[^\n]*/g, "" ) )
    .pipe( replace( /[^\n]*= require[^\n]*/g, "" ) )
    .pipe( concat( "main.js" ) )
    .pipe( gulp.dest( destination ) );
});

// Build utils
gulp.task( "utils", function () {
  return gulp
    .src( utils )
    .pipe( replace( /module.exports[^\n]*/g, "" ) )
    .pipe( replace( /[^\n]*= require[^\n]*/g, "" ) )
    .pipe( concat( "utils.js" ) )
    .pipe( gulp.dest( destination ) );
});
