# svg.easing.js

Additional easing equations for the fx module in the [svg.js](https://svgdotjs.github.io) library.

Svg.easing.js is licensed under the terms of the MIT License.

## Usage
Include this plugin after including the svg.js library in your html document.

To use the custom easing methods:

```javascript
var draw = SVG('paper').size(400, 400)
var rect = draw.rect(100, 100)

rect.animate(500, 'bounce').move(300, 300)
```

Available easing methods are:
- `quadIn`
- `quadOut`
- `quadInOut`
- `cubicIn`
- `cubicOut`
- `cubicInOut`
- `quartIn`
- `quartOut`
- `quartInOut`
- `quintIn`
- `quintOut`
- `quintInOut`
- `sineIn`
- `sineOut`
- `sineInOut`
- `expoIn`
- `expoOut`
- `expoInOut`
- `circIn`
- `circOut`
- `circInOut`
- `backIn`
- `backOut`
- `backInOut`
- `swingFromTo`
- `swingFrom`
- `swingTo`
- `bounce`
- `bounceOut`
- `elastic`

