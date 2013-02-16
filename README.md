# Zenput

Transform plain textarea's in full screen focused writing.

## Getting Started
Download the [production version][min] or the [development version][max].

You can use this plugin with jQuery or Zepto.

[min]: https://raw.github.com/anthonyringoet/zenput/master/dist/zenput.min.js
[max]: https://raw.github.com/anthonyringoet/zenput/master/dist/zenput.js

In your web page:

```html
<script src="jquery.js"></script>
<script src="dist/zenput.min.js"></script>
<script>
jQuery(function($) {
  $('textarea').zenput(); // all textareas are affected
});
</script>
```

In the demo I only use a couple css rules.
See `/demo/css/zenput.css` for those.

## Examples
Quickest way to check this out is clone the repo, pop open your terminal and in the root of the repo type:

```
open "http://0.0.0.0:1111/demo"; python -m SimpleHTTPServer 1111
```

Hit refresh in your browser. All done!

## Possible todo's ##
- [ ] add config for texts inside triggers
- [ ] add aria roles
- [ ] add before and after hooks
- [ ] trigger custom events on (un)focus

## License
Copyright (c) 2013 Anthony Ringoet  
Licensed under the MIT, GPL licenses.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/cowboy/grunt).

### Important notes
Please don't edit files in the `dist` subdirectory as they are generated via grunt. You'll find source code in the `src` subdirectory!

While grunt can run the included unit tests via PhantomJS, this shouldn't be considered a substitute for the real thing. Please be sure to test the `test/*.html` unit test file(s) in _actual_ browsers.