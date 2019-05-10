import React, { Component } from 'react';
import DatePicker from './components/DataPicker'

import { Background } from './styles';


export default class src extends Component {
  render() {
    return (
      <Background>
        <DatePicker />
      </Background>
    );
  }
}

