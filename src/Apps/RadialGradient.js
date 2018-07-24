import React, { Component } from 'react';
import { connect } from "react-redux";


class RadialGradient extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props,
            radius: 50,
        }
        this.onWheel = this.onWheel.bind(this)
    }

    onWheel(event) {
        // console.log(event)
        event.persist()
        event.preventDefault()
        this.setState((prevState, props) => {
            prevState.radius +=  event.deltaY
            return prevState
        })
    }

    render() {
        let style = Object.assign({}, this.props.gradientStyle)
        style.background += this.state.radius / 100 + "%)"
        return (
        <div className="AppContainer">
            <div> Moving gradient with React + Redux. Gradient radius changes in mouse wheel moves. </div>
            <div style={style}
                className="gradient-block radial"
                onWheel={this.onWheel}
            ></div>
        </div>
        );
    };
};

function mapStoreToProps(state) {
    return {
        gradientStyle: state.radialGradientStyle
    }
}

export default connect(mapStoreToProps)(RadialGradient);
