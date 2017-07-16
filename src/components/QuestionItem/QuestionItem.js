// @flow

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';

import s from './QuestionItem.css';

const FaShareAlt = require('react-icons/lib/fa/share-alt');

type Question = { title: string, id: string };

class QuestionItem extends React.Component {
  props: {
    question: Question,
    openModal: Question => void,
  };

  render() {
    return (
      <li className={s.questionItem}>
        <div className={s.iconWrapper}>
          <FaShareAlt />
        </div>
        <a
          href={`#${this.props.question.id}`}
          onClick={() => {
            this.props.openModal(this.props.question);
          }}
        >
          {this.props.question.title}
        </a>
      </li>
    );
  }
}

export default withStyles(s)(QuestionItem);
