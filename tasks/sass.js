'use strict';

var gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' );

gulp.task( 'sass', ['clean'], function () {
    return gulp.src( './sass/**/*.scss' )
        .pipe( sass.sync().on( 'error', sass.logError ) )
        .pipe( gulp.dest( './css' ) );
} );
