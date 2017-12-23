import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import Movies from './Movies';
import Actors from './Actors';
import '../css/App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Grid fluid={true}>
          <Row>
            <Col lg={4}>
              <Row center="lg">
                <Col lg={4}><Movies /></Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col lg={4}>
              <Row center="lg">
                <Col lg={4}><Actors /></Col>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
