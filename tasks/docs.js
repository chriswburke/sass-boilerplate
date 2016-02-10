'use strict';

var gulp = require( 'gulp' ),
    sassdoc = require( 'sassdoc' );

gulp.task( 'sassdoc', function () {
    var options = {
        dest: 'docs'
    };

    return gulp.src( './sass/**/*.scss' )
        .pipe( sassdoc( options ) );
} );
