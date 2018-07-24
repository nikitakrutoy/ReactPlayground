function angle(cx, cy, ex, ey) {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  //if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
}

function distance(cx, cy, ex, ey) {
    let pow = Math.pow;
    return pow(pow(cx - ex, 2) + pow(cy - ey, 2), 0.5);
}

export {angle, distance};
