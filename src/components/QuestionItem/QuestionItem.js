import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';

import s from './QuestionItem.css';

const FaShareAlt = require('react-icons/lib/fa/share-alt');

class QuestionItem extends React.Component {
  static propTypes = {
    question: PropTypes.shape({ title: PropTypes.string, id: PropTypes.string })
      .isRequired,
  };
  render() {
    return (
      <li className={s.questionItem}>
        <div className={s.iconWrapper}>
          <FaShareAlt />
        </div>
        {this.props.question.title} - {this.props.question.id}
      </li>
    );
  }
}

export default withStyles(s)(QuestionItem);
