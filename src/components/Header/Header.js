/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.css';
import Link from '../Link';
import Navigation from '../Navigation';

class Header extends React.Component {
  static propTypes = {
    userEmail: PropTypes.string,
  };

  static defaultProps = {
    userEmail: '',
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
