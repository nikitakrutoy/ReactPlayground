import React, { Component } from "react"
import ReactDOM from "react-dom"
import MyAlert from "./Apps/MyAlert"
import Gradient, {gradientUpdater} from "./Apps/Gradient"

class Apps extends Component {
    render() {
        return (
            <div className="AppsContainer">
                <MyAlert />
                <div className="GradientContainer">
                    <Gradient />
                </div>
            </div>
        );
    }
}

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



function UpdateGradient(event) {
    let target = $(".GradientContainer");
    let offset = target.offset();
    let center = {
        x: offset.left + $(target).width() / 2,
        y: offset.top + $(target).height() / 2,
    };
    let farthestWindowAngle = {
        x: window.innerWidth * (center.x < window.innerWidth / 2),
        y: window.innerHeight * (center.y < window.innerHeight / 2)
    };
    let colorStop = (
        distance(center.x, center.y, event.x, event.y) /
        distance(center.x, center.y, farthestWindowAngle.x, farthestWindowAngle.y)
    ) * 100;
    // console.log(gradientUpdater)
    gradientUpdater.callback(
        angle(center.x, center.y, event.x, event.y),
        colorStop,
    )
}

document.addEventListener("mousemove", UpdateGradient)


export default Apps;
