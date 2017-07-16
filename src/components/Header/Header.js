// @flow

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends React.Component {
  static defaultProps = {
    userEmail: '',
  };

  props: {
    userEmail?: string,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Navigation userEmail={this.props.userEmail} />
          <Link className={s.titleLink} to="/">
            <h1 className={s.titleText}>
              Ask refugees{'{'}code{'}'}
            </h1>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
