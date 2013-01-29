/*
 * zenput
 * https://github.com/anthonyringoet/zenput
 *
 * Copyright (c) 2013 Anthony Ringoet
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  $.fn.zenput = function() {
    var my = {},
        inputs = this,
        $body = $('body');

    my.mirror = function(give, take){
      take.val(give.val());
    };

    // init
    // add toggle, mirror,…
    inputs.each(function(){
      var $input = $(this);
      $('<a class="zenput-focus" href="#">Focus</a>').insertBefore($input);
    });

    var $mirror = $('<div class="zenput-mirror-wrap"><a class="zenput-unfocus" href="#">Unfocus</a><textarea class="zenput-mirror" /></div>').hide();
    $body.append($mirror);

    // cache in dom
    $mirrorWrap = $body.find('.zenput-mirror-wrap');
    $mirror = $mirrorWrap.find('.zenput-mirror');
    var $unfocus = $mirrorWrap.find('.zenput-unfocus');

    // events
    $body.on('click', '.zenput-focus', function(){
      var $toggle = $(this),
          $input = $toggle.next();

      my.activeInput =  $input;
      my.mirror($input, $mirror);
      $mirrorWrap.toggle();
      $mirror.focus();
    });

    $body.on('click', '.zenput-unfocus', function(){
      var $toggle = $(this);

      my.mirror($mirror, my.activeInput);
      $mirrorWrap.toggle();
      my.activeInput.focus();
    });


    return this.each(function() {
      $(this);
    });
  };

}(jQuery));
