'use strict';

var gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' );

gulp.task( 'watch', [ 'clean' ], function () {
    gulp.watch( './sass/**/*.scss', [ 'sass:lint', 'sass:dev' ] );
} );
