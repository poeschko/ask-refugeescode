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
        <h3 className={s.prompt}>
          {' '}Search the refugees{'{'}code{'}'} question
        </h3>
        <div className={s.suche}>
          {' '}<input
            type="text"
            name="search"
            placeholder="Search.."
            onChange={this.onSearchChange}
          />
          <label htmlFor="search" className="sr-only">
            suchen
          </label>
          <button
            className="btn btn-secondary"
            type="submit"
            aria-label="suchen"
          />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Cover);
