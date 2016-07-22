import React, { PropTypes } from 'react';
import { QuickSummary } from './index';
import moment from 'moment';

const Navbar = (props) => {
  const { reportTitle, stats } = props;
  const reportDate = moment(stats.end).format('dddd, MMMM D YYYY, hh:mma');

  return (
    <div className='navbar navbar-inverse navbar-fixed-top' role='navigation'>
      <div className='container'>
        <div className='report-info-cnt'>
          <h1 className='report-title'>{ reportTitle }</h1>
          <h3 className='report-date'>{ reportDate }</h3>
        </div>
        <div className='nav-right'>
          <div className='quick-summary-cnt'>
            <QuickSummary stats={ stats } />
          </div>
          <button className='nav-menu-btn open-menu'><i className='icon-menu'></i></button>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  reportTitle: PropTypes.string,
  stats: PropTypes.object
};

export default Navbar;
