import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Cover.css';

class Cover extends React.Component {
  render() {
    return (
      <div className={s.cover}>
        Search the refugees{'{'}code{'}'} questions
      </div>
    );
  }
}

export default withStyles(s)(Cover);
