import React from 'react';
import {Jumbotron} from 'react-bootstrap';
import Slogans from '../Slogans/';

const Header = () => (
  <Jumbotron className='header text-center'>
    <h1>krapu.la</h1>
    <Slogans />
  </Jumbotron>
);

export default Header;
