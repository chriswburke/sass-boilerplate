'use strict';

var gulp = require( 'gulp' );

gulp.task( 'default', ['build'] );
gulp.task( 'test', [ 'clean', 'sass:lint', 'sass:dev', 'sass:prod' ]);
gulp.task( 'build', [ 'clean', 'sass:prod', 'sassdoc' ]);
