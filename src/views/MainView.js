import React from 'react';
import Header from '../components/Header';
import {Grid, Row, Col} from 'react-bootstrap'
import NameGenerator from '../components/NameGenerator';
import LastKrappe from '../components/LastKrappe';

const MainView = () => (
  <div>
    <Header/>
    <Grid>
      <Row>
        <Col lg={12} md={12} sm={12} xs={12}>
          <NameGenerator type="krapula"/>
        </Col>
      </Row>
      <LastKrappe/>
    </Grid>
  </div>
);

export default MainView;
