import React, { Component } from 'react';

var gradientUpdater = {test: "test"};

class Gradient extends Component {
    constructor(props) {
        super(props);
        let color1 = "255,0,0,.8";
        let color2 = "255,0,0,0";
        this.state = {
            gradientStyle: {
                background: 'linear-gradient(0deg, rgba(255,0,0,.8), rgba(255,0,0,0) 0%)'
            }
        };
        console.log(this.gradientStyle);
    };

    componentWillMount() {
        gradientUpdater.callback = (angle, colorStop) => {
            // console.log(this);
            this.setState({
                gradientStyle: {
                    background: 'linear-gradient(' + angle + 'deg, rgba(255,0,0,.8), rgba(255,0,0,0) ' +  colorStop + '%)'
                }
            })
        }
    }

    render() {
        return (
            <div style={this.state.gradientStyle}
                className="gradient-block"
            ></div>
        );
    };

}
export {gradientUpdater};
export default Gradient;
