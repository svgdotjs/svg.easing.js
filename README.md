# svg.easing.js

Additional easing equations for the fx module in the [svgjs.com](http://svgjs.com) library.

Svg.easing.js is licensed under the terms of the MIT License.

## Usage
Include this plugin after including the svg.js library in your html document.

To use the custom easing methods:

```javascript
var draw = svg('paper').size(400, 400);
var rect = draw.rect(100, 100);

rect.animate(500, SVG.easing.bounce).move(300, 300);
```

Available easing methods are:
- `SVG.easing.bounce`
- `SVG.easing.backIn`
- `SVG.easing.backOut`