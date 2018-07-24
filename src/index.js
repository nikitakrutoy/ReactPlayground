import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Apps from './Apps';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import registerServiceWorker from './registerServiceWorker';


const StoreUpdater = (
    state = {
        radialGradientStyle: { background: "white" }
    },
    action) => {
        // console.log(state)
        // console.log(action)
        switch (action.type) {
            case "MouseMove":
                let target = $(".gradient-block.radial");
                let offset = target.offset();
                if (!offset) {
                    offset = {
                        left: 0,
                        top: 0,
                    }
                }
                // console.log("offset", offset)
                // console.log("action", action)
                let position = {
                    x: action.x - offset.left,
                    y: action.y - offset.top,
                }
                state = {
                    radialGradientStyle: {
                        background: 'radial-gradient(circle at ' + position.x + 'px ' + position.y + 'px, rgba(255,0,0,.8), rgba(255,0,0,0) '
                    }
                }
                return state;
            default:
              return state;
        }
    }

var store = createStore(StoreUpdater);
console.log(store)

function DispatchUpdateGradient(event) {
    // console.log("DispatchUpdateGradient");
    store.dispatch({
        type: "MouseMove",
        x: event.pageX,
        y: event.pageY,
    })
}

document.addEventListener("mousemove", DispatchUpdateGradient)

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(
    <Provider store={store}>
        <Apps />
    </Provider>
, document.getElementById('content'));
registerServiceWorker();
