# Sass Boilerplate
[![Build Status](https://travis-ci.org/chriswburke/sass-boilerplate.svg?branch=master)](https://travis-ci.org/chriswburke/sass-boilerplate)



## Features

* CSS Autoprefixing
* Built-in preview server with BrowserSync
* Compile Sass with [libsass](http://libsass.org)
* Documentation with [sassdoc](http://sassdoc.com/)


## Notes on libsass

Keep in mind that libsass is feature-wise not fully compatible with Ruby Sass. Check out [this](http://sass-compatibility.github.io) curated list of incompatibilities to find out which features are missing.


## Getting Started
- Clone this repo!
- Install dependencies: `npm install`
- Run `npm run serve` to preview and watch for changes
- Run `npm run build` to build your sass for production

## Project Structure

The project structure is based on the Sass 7-1 Pattern. Checkout [sass guidlines](http://sass-guidelin.es/#the-7-1-pattern) for a detailed overview. The key difference in this structure is that we've given variables their own directory. Managing variables in a large project can get pretty crazy so to make things easier to maintain, we separate them by type.

```
Project Root/
│
├── build/
│   ├── css/
│   │     └── main.css
│   │     └── print.css
├── src/
│   └── sass/
│       ├── base/
│       │   └── _all.scss
│       │   └── _fonts.scss
│       │   └── _iconograpy.scss
│       │   └── _typography.scss
│       │   
│       ├── components/
│       │   └── _all.scss
│       │   └── _buttons.scss
│       │
│       ├── layout/
│       │   └── _all.scss
│       │   └── _footer.scss
│       │   └── _grid.scss
│       │   └── _header.scss
│       │   └── _navigation.scss
│       │
│       ├── pages/
│       │   └── _all.scss
│       │   └── _home.scss
│       │
│       ├── themes/
│       │   └── _all.scss
│       │   └── _default.scss
│       │
│       ├── utils/
│       │   └── _all.scss
│       │   └── _functions.scss
│       │   └── _helpers.scss
│       │   └── _mixins.scss
│       │
│       ├── variables/
│       │   └── _all.scss
│       │   └── _breakpoints.scss
│       │   └── _colors.scss
│       │
│       ├── vendor/
│       │   └── _all.scss
│       │
│       │
│       └── main.scss
│       └── print.scss

│
├── docs/
│
├── node_modules/
│
├── .editorconfig
├── .gitignore
├── package.json
└── README.md
```

##TODO

* SCSS Linting
* Source Maps for Development

## License

[MIT license](http://opensource.org/licenses/mit-license.php)


