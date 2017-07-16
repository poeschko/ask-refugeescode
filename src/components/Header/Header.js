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
          <h1 className={s.titleText}>
            <Link className={s.titleLink} to="/">
              Ask refugees{'{'}code{'}'}
            </Link>
          </h1>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Header);
