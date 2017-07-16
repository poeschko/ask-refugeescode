/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Footer.css';

const FaTwitter = require('react-icons/lib/fa/twitter');
const FaFacebook = require('react-icons/lib/fa/facebook');

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.links}>
            <a href="http://www.refugeescode.at/">Website</a>&nbsp;
            <a href="https://twitter.com/RefugeesCode">
              {' '}<FaTwitter />{' '}
            </a>&nbsp;
            <a href="https://www.facebook.com/refugeescode/">
              {' '}<FaFacebook />{' '}
            </a>&nbsp;
          </div>
          <span className={s.text}>
            © Developed by refugees{'{'}code{'}'}
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
