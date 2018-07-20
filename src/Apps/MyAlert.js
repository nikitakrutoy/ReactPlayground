import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Alert } from 'react-bootstrap';

class MyAlert extends Component {
    constructor(props) {
        super(props)
        this.state = { message: 'Alert!'};
    }

    getInitialState() {
        return {};  // <-- Initialize the state
    }

    componentDidMount() {
        this.setState({message: 'Alert...'})

        // 1-st way
        window.addEventListener('penetration-to-header', (event)=>{
            console.log("Catched event -> `penetration-to-header` ", event.detail);
            this.setState({message: event.detail.info});
        });

        // 2-nd way
        let alertItem = document.querySelector(".alert_item");
        console.log(alertItem);
        alertItem.addEventListener('targeted-event', (event)=>{
            console.log("Catched event -> `targeted-event`!!!", event.detail);
            this.setState({message: event.detail.info});
        }, false);

    }

  render() {
    return (
        <div className="alert_item" >
            <Alert bsStyle="danger">
                { this.state.message }
            </Alert>
        </div>
    );
  }
}

export default MyAlert;
