'use strict';

var gulp = require( 'gulp' ),
    sass = require( 'gulp-sass' ),
    sassLint = require( 'gulp-sass-lint' ),
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

gulp.task( 'sass:lint', function () {
    gulp.src( './sass/**/*.s+(a|c)ss' )
        .pipe( sassLint( {
            'options': {
                'merge-default-rules': false,
            },
            'files': {
                'include': 'sass/**/*.s+(a|c)ss',
                'ignore': [
                    'sass/vendor/**/*.*'
                ]
            },
            'rules': {
                'extends-before-mixins': 2,
                'extends-before-declarations': 2,
                'mixins-before-declarations': [
                    2, {
                        'exclude': [
                            'breakpoint',
                            'mq'
                        ]
                    }
                ],
                'no-warn': 0,
                'no-debug': 1,
                'no-ids': 2,
                'no-important': 2,
                'hex-notation': [
                    2, {
                        'style': 'uppercase'
                    }
                ],
                'indentation': [
                    0, {
                        'size': 4
                    }
                ],
                'variable-for-property': [
                    2, {
                        'properties': [
                            'margin',
                            'content'
                        ]
                    }
                ]
            }
        } ) )
        .pipe( sassLint.format() )
        .pipe( sassLint.failOnError() )
} );
