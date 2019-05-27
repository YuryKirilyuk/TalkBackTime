/**
 * Submit registration
 *
 * all inputs and selects must have class="js-registration-field"
 * add class "js-registration-form" to form which will be submitted like registration of the user
 *
 * Please set name to each field
 * Available inputs and select names (Required to validate and submit).
 * All fields are required to fill:
 * email
 * phone
 * password
 * first_name
 * last_name
 * title
 * companyName
 *
 * e.g. <input type="email" name="email" class="js-registration-field" />
 *
 * */
(function($) {
  // Default confirmation type
  var CONFIRM_BY = 'sms';
  var REQUEST_URL = 'https://api.app.talkbacktime.com/api/user';

  var $fields = $('.js-registration-field');
  var $form = $('.js-registration-form');

  /**
   * On form submit
   * */
  $form.on('submit', function(e) {
    e.preventDefault();
    var $this = $(this);
    var dataList = $this.serializeArray();
    var params = {
      confirm_by: CONFIRM_BY,
    };
    for (var i = 0; i < dataList.length; i++) {
      params[dataList[i].name] = dataList[i].value;
    }

    $.ajax({
      method: 'post',
      url: REQUEST_URL,
      data: params,
      success: function(res) {
        // success message
        // email must be verified if you want to do this please redirect the user to the page
        // "//app.talkbacktime.com/account-verification?email=${encodeURIComponent(params.email)}"
        // or show success message
      },
      error: function($xhr) {
        var data = $xhr.responseJSON;
        parseErrors(data);
      }
    });
  });

  $fields.on('change', removeFieldError);

  /**
   * Set error below the field
   * @params {Array} errors
   * @param {Array} errors[<field name key>] - list of errors to each field
   * */
  function parseErrors(errors) {
    if (!errors) {
      return false;
    }
    for (var i in errors) {
      if (!errors.hasOwnProperty(i) || errors[i].length === 0) {
        continue;
      }
      var $parent = $('.js-registration-field[name="' + i + '"]').parent();
      var $error = $parent.find('.js-error-message');
      var elError = errors[i].join(' ');
      if ($error && $error.length) {
        $error[0].innerHtml = elError;
      } else {
        $parent.append($('<div class="js-error-message" style="font-size: 14px;color: #ff5379;">' + elError + '</div>'))
      }
    }
  }

  /**
   * Remove error on change field
   * */
  function removeFieldError() {
    $(this).parent()
    .find('.js-error-message')
    .remove();
  }
})(jQuery);