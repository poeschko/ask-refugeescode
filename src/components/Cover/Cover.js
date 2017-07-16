// @flow

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './Cover.css';

class Cover extends React.Component {
  onSearchChange = event => {
    const { onSearchChange } = this.props;
    if (onSearchChange) {
      onSearchChange(event.target.value);
    }
  };

  props: {
    onSearchChange: string => void,
  };

  render() {
    return (
      <div className={s.cover}>
        <h2 className={s.prompt}>
          Search the refugees{'{'}code{'}'} questions
        </h2>
        <div className={s.searchContainer}>
          <input
            className={s.search}
            type="text"
            name="search"
            placeholder="Search"
            onChange={this.onSearchChange}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Cover);
