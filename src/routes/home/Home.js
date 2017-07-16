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
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import questionsQuery from './questions.graphql';
import Questions from '../../components/Questions';
import s from './Home.css';

class Home extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      loading: PropTypes.bool.isRequired,
      questions: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          title: PropTypes.string,
          videoUrl: PropTypes.string,
        }),
      ).isRequired,
    }).isRequired,
  };

  render() {
    const { data: { loading, questions } } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          {loading
            ? 'Loading...'
            : <h1>
                Ask refugees
                {'{'}
                code
                {'}'}
                <Questions questions={questions} />
              </h1>}
        </div>
      </div>
    );
  }
}

export default compose(withStyles(s), graphql(questionsQuery))(Home);
