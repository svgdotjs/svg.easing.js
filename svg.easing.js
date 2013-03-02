// svg.easing.js 0.2 - Copyright (c) 2013 Wout Fierens - Licensed under the MIT license

SVG.easing = {
  
  backIn: function (pos) {
    var s = 1.70158
    return pos * pos * ((s + 1) * pos - s)
  }
  
, backOut: function (pos) {
    pos = pos - 1
    var s = 1.70158
    return pos * pos * ((s + 1) * pos + s) + 1
  }
  
, bounce: function(pos) {
    var s = 7.5625,
        p = 2.75,
        l
        
    if (pos < (1 / p)) {
      l = s * pos * pos
    } else {
      if (pos < (2 / p)) {
        pos -= (1.5 / p)
        l = s * pos * pos + .75
      } else {
        if (pos < (2.5 / p)) {
          pos -= (2.25 / p)
          l = s * pos * pos + .9375
        } else {
          pos -= (2.625 / p)
          l = s * pos * pos + .984375
        }
      }
    }
    return l
  }

, elastic: function(pos) {
    if (pos == !!pos) return pos
    return Math.pow(2, -10 * pos) * Math.sin((pos - 0.075) * (2 * Math.PI) / .3) + 1
  }
  
}
