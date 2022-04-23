/*=========================================================================================
  File Name: auth-register.js
  Description: Auth register js file.
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: PIXINVENT
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(function () {
  ('use strict');

  var assetsPath = '../../../app-assets/',
    registerMultiStepsWizard = document.querySelector('.register-multi-steps-wizard'),
    pageResetForm = $('.auth-register-form'),
    select = $('.select2'),
    creditCard = $('.credit-card-mask'),
    expiryDateMask = $('.expiry-date-mask'),
    cvvMask = $('.cvv-code-mask'),
    mobileNumberMask = $('.mobile-number-mask'),
    pinCodeMask = $('.pin-code-mask');

  if ($('body').attr('data-framework') === 'laravel') {
    assetsPath = $('body').attr('data-asset-path');
  }

  // jQuery Validation
  // --------------------------------------------------------------------
  if (pageResetForm.length) {
    pageResetForm.validate({
      /*
      * ? To enable validation onkeyup
      onkeyup: function (element) {
        $(element).valid();
      },*/
      /*
      * ? To enable validation on focusout
      onfocusout: function (element) {
        $(element).valid();
      }, */
      rules: {
        'username': {
          required: true,
          minlength: 1,
          maxlength: 32
        },
        'email': {
          required: true,
          email: true,
          minlength: 6,
          maxlength: 50
        },
        'password': {
          required: true,
          minlength: 6,
          maxlength: 50,
        }
      }
    });
  }
});
