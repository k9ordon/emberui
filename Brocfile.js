var pickFiles = require('broccoli-static-compiler');
var filterCoffeeScript  = require('broccoli-coffee');
var filterTemplates     = require('broccoli-template');
var vndFilterES6Modules = require('broccoli-dist-es6-module');
var compileSass         = require('broccoli-sass');
var autoprefixer        = require('broccoli-autoprefixer');
var mergeTrees = require('broccoli-merge-trees');

var lib                 = 'lib';
var scss                = 'scss';

function filterES6Modules(tree, opts) {
  return mergeTrees(vndFilterES6Modules(tree, opts));
}

styles = compileSass([scss], 'emberui.scss', 'emberui.css');
styles = autoprefixer(styles);

defaultTheme = compileSass([scss], 'default-theme.scss', 'default-theme.css');
defaultTheme = autoprefixer(defaultTheme);

lib = filterTemplates(lib, {
  extensions: ['hbs'],
  compileFunction: 'Ember.Handlebars.compile'
});

lib = filterCoffeeScript(lib, {
  bare: true
})

lib = filterES6Modules(lib, {
  global:      'eui',
  packageName: 'emberui',
  main:        'main',

  shim: {
    ember:      'Ember',
    handlebars: 'Handlebars'
  }
});

module.exports = mergeTrees([lib, styles, defaultTheme]);
