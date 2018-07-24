import React, { Component } from "react"
import ReactDOM from "react-dom"
import MyAlert from "./Apps/MyAlert"
import Gradient, {gradientUpdater} from "./Apps/Gradient"
import RadialGradient from "./Apps/RadialGradient"
import { angle, distance } from "./utils"

class Apps extends Component {
    render() {
        return (
            <div className="AppsContainer">
                <MyAlert />
                <Gradient />
                <RadialGradient />
            </div>
        );
    }
}

function UpdateGradient(event) {
    let target = $(".gradient-block");
    let offset = target.offset();
    if (!offset) {
        offset = {
            x: 0,
            y: 0,
        }
    }
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
