import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/Movies.css';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Grid className="movies">
        <Row>
          <Col xs={2} sm={3} md={4} lg={6}>
            <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcQW3LbpT94mtUG1PZIIzJNxmFX399wr_NcvoppJ82k7z99Hx6in" />
          </Col>
          <Col xs={2} sm={3} md={4} lg={6}>
            <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcQW3LbpT94mtUG1PZIIzJNxmFX399wr_NcvoppJ82k7z99Hx6in" />
          </Col>
          <Col xs={2} sm={3} md={4} lg={6}>
            <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcQW3LbpT94mtUG1PZIIzJNxmFX399wr_NcvoppJ82k7z99Hx6in" />
          </Col>
          <Col xs={2} sm={3} md={4} lg={6}>
            <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcQW3LbpT94mtUG1PZIIzJNxmFX399wr_NcvoppJ82k7z99Hx6in" />
          </Col>
          <Col xs={2} sm={3} md={4} lg={6}>
            <img src="http://t2.gstatic.com/images?q=tbn:ANd9GcQW3LbpT94mtUG1PZIIzJNxmFX399wr_NcvoppJ82k7z99Hx6in" />
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Movies;
