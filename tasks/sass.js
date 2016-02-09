'use strict';

var gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require( 'gulp-autoprefixer' );

gulp.task( 'sass:prod', [ 'clean' ], function () {
    return gulp.src( './sass/*.scss' )
        .pipe( sass( {
            outputStyle: 'compressed'
        } ).on( 'error', sass.logError ) )
        .pipe( sourcemaps.init() )
        .pipe( autoprefixer() )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( gulp.dest( './css' ) );
} );

gulp.task( 'sass:dev', [ 'clean' ], function () {
    return gulp.src( './sass/*.scss' )
        .pipe( sass().on( 'error', sass.logError ) )
        .pipe( sourcemaps.init() )
        .pipe( autoprefixer() )
        .pipe( sourcemaps.write( '.' ) )
        .pipe( gulp.dest( './css' ) );
} );
