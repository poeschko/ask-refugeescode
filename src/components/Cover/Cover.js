import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Cover.css';

class Cover extends React.Component {
  render() {
    return (
      <div className={s.cover}>
        <h3 className={s.prompt}>
          {' '}Search the refugees{'{'}code{'}'} question
        </h3>
        <div className={s.suche}>
          {' '}<input type="text" placeholder="Search.." />
          <button
            className="btn btn-secondary"
            type="submit"
            aria-label="suchen"
          >
            <i className="fa fa-search">Search</i>
          </button>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Cover);
