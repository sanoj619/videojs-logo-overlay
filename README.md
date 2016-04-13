#videojs-logo-overlay

Show logo image over videojs container.


## Usage

### Include the plugin JS/CSS:

```html
<link rel="stylesheet" href="/path/to/videojs-logo-overlay.css">
<script src="/path/to/videojs-logo-overlay.js"></script>
```

### Enable the plugin
Add videojs-logo-overlay plugin to your Videojs function.  

```js
videojs('vidId', {
  'plugins': {
    'logoOverlay': {
      'src': '/path/logo.png'
    }
  }
});
```

or add logoOverlay initialize function after Videojs is ready.

```js
videojs('vidId').ready(function() {
  this.logoOverlay({
    src: '/path/logo.png',
    link: 'http://linkURL'
  });
});
```
Check the available [Options](#options) to customizing your own logo image.

## Options

####src 

`(string)` Logo image's URL

####link 

`(string)` A HTML tag's href attribute value. Default target is set to _blank.  (default: `#`)

####linkTarget

`(string)` LinkTarget specifies where to open the linked document. (default: `_blank`)

####margin 

Apply margin to logo image from video container's corner. Margin values can be applied to three types.

`(number)` Apply value to top, right, bottom, left at once. (default: `0`)

`(array)` [top, right, bottom, left] or [top/bottom, right/left]. Value type is number.

`(object)` {'top': value, 'right': value, 'bottom': value, 'left': value}. Value type is number.

####userActive 

`(boolean)` Enables show/hide logo image when videojs user-active is change. (default: `false`)

####position 

`(string)` Logo image's position value. **TL** : Top-Left, **TR** : Top-Right, **BL** : Bottom-Left, **BR** : Bottom-Right. (default: `TL`)

####width 
`(number)` Logo image's width px. (default `null`)

####height
`(number)` Logo image's height px. (default `null`)


## License

http://www.apache.org/licenses/LICENSE-2.0