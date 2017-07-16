import React from 'react';
import { graphql, compose } from 'react-apollo';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import questionsQuery from './questions.graphql';

import QuestionItem from '../QuestionItem';

import s from './Questions.css';

class Questions extends React.Component {
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
    const { loading, questions } = this.props.data;
    return (
      <div>
        {loading && <span className={s.loading}>Loading...</span>}
        {questions &&
          questions.map(question =>
            <QuestionItem key={question.id} question={question} />,
          )}
      </div>
    );
  }
}

export default compose(
  withStyles(s),
  graphql(questionsQuery, {
    options: ({ search }) => ({ variables: { search } }),
  }),
)(Questions);
