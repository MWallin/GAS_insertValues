const gulp = require( "gulp" );
const concat = require( "gulp-concat" );
const replace = require( "gulp-replace" );

//script paths
const jsFiles = "src/**/*.js";
const jsDest = "dist/";

gulp.task( "build", function () {
  return gulp
    .src( jsFiles )
    .pipe( replace( /module.exports[^\n]*/g, "" ) )
    .pipe( replace( /[^\n]*= require[^\n]*/g, "" ) )
    .pipe( concat( "dist.js" ) )
    .pipe( gulp.dest( jsDest ) );
});
