define([
  'jquery',
  'underscore',
  'backbone'
], function($, _, Backbone) {
  'use strict';
  var UserModel = Backbone.Model.extend({
    defaults: {
      'id': null,
      'organization': null,
      'name': null,
      'type': null,
      'status': null,
      'otp_auth': null,
      'otp_secret': null,
      'servers': null
    },
    url: function() {
      var url = '/user/' + this.get('organization');

      if (this.get('id')) {
        url += '/' + this.get('id');
      }

      return url;
    },
    destroyOtpSecret: function(options) {
      this.destroy(_.extend({
        url: this.url() + '/otp_secret'
      }, options));
    }
  });

  return UserModel;
});
