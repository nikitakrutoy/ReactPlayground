import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class MyAlert extends Component {
  render() {
    return (
        <div>
            <Alert bsStyle="danger">
                Alert!
            </Alert>
        </div>
    );
  }
}

export default MyAlert;
