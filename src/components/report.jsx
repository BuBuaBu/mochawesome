import React, { Component, PropTypes } from 'react';
import { Navbar } from './index';

class MochawesomeReport extends Component {
  static propTypes = {
    data: PropTypes.object
  };

  state = {};

  render() {
    const { reportTitle, stats } = this.props.data;
    return (
      <div>
        <Navbar reportTitle={ reportTitle } stats={ stats } />
      </div>
    );
  }
}

export default MochawesomeReport;
