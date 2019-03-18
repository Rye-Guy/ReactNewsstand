import React, { Component } from 'react';
import {getPublications} from '../actions/index';
import PubsList from '../containers/pubs_list'
export default class App extends Component {


  render() {
    return (
      <div>
        <PubsList></PubsList>
      </div>
    );
  }
}