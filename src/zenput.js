/*
 * zenput
 * https://github.com/anthonyringoet/zenput
 *
 * Copyright (c) 2013 Anthony Ringoet
 * Licensed under the MIT, GPL licenses.
 */

(function($) {

  $.fn.zenput = function() {
    var inputs = this,
        $body = $('body');

    // init:
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

    $body.on('click', '.zenput-focus', function(){
      var $toggle = $(this),
          $input = $toggle.next();

      // mirror content input -> mirror
      console.log($input.html());
      $mirror.html($input.html());
      $mirror.html('wtf');

      $mirrorWrap.toggle();
      // show mirror on top
    });


    return this.each(function() {
      $(this).html('text');
    });
  };

}(jQuery));
