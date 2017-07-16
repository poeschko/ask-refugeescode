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
import Questions from '../../components/Questions';
import Cover from '../../components/Cover';
import s from './Home.css';

class Home extends React.Component {
  state = {
    search: '',
  };

  onSearchChange = value => {
    this.setState({ search: value });
  };

  render() {
    return (
      <div>
        <Cover onSearchChange={this.onSearchChange} />
        <div className={s.container}>
          <Questions search={this.state.search} />
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
