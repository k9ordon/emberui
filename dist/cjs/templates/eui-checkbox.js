"use strict";
exports["default"] = Ember.Handlebars.compile("<input type=\"checkbox\" {{bind-attr checked=value disabled=disabled}} />\n\n<div {{bind-attr class=\":eui-checkbox-form disabled:eui-disabled:eui-enabled\"}}>\n  <div class=\"eui-wrapper\">\n    <i class=\"eui-icon\"></i>\n  </div>\n</div>\n\n{{label}}\n\n{{#if errorMessage}}\n  <div class=\"eui-error-message\">\n    <div class=\"eui-error-wrapper\">\n      <p>\n        {{errorMessage}}\n      </p>\n    </div>\n  </div>\n{{/if}}\n");