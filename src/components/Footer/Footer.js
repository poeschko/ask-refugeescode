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
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGitHub from 'react-icons/lib/fa/github';

import s from './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.links}>
            <a className={s.link} href="https://twitter.com/RefugeesCode">
              {' '}<FaTwitter />{' '}
            </a>&nbsp;
            <a className={s.link} href="https://www.facebook.com/refugeescode/">
              {' '}<FaFacebook />{' '}
            </a>&nbsp;
            <a
              className={s.link}
              href="https://github.com/poeschko/ask-refugeescode"
            >
              {' '}<FaGitHub />{' '}
            </a>
          </div>
          <span className={s.text}>
            © Developed by{' '}
            <a className={s.link} href="http://www.refugeescode.at/">
              refugees{'{'}code{'}'}
            </a>
          </span>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Footer);
