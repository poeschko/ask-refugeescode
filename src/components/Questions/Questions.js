import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';

import QuestionItem from '../QuestionItem';

import s from './Questions.css';

class Questions extends React.Component {
  static propTypes = {
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        videoUrl: PropTypes.string,
      }),
    ).isRequired,
  };

  render() {
    return (
      <div className={s.questions}>
        {this.props.questions.map(question =>
          <QuestionItem question={question} />,
        )}
      </div>
    );
  }
}

export default withStyles(s)(Questions);
