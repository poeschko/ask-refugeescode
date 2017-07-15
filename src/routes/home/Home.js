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
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        videoUrl: PropTypes.string,
      }),
    ),
  };

  static defaultProps = {
    questions: [],
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>
            Ask refugees
            {'{'}
            code
            {'}'}
            {JSON.stringify(this.props.questions)}
          </h1>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
