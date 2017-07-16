// @flow

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import FaEdit from 'react-icons/lib/fa/edit';

import s from './QuestionItem.css';

import type Question from '../../data/flow/Question';

class QuestionItem extends React.Component {
  static defaultProps = {
    openEditDialog: null,
  };

  onOpenClick = () => {
    this.props.openModal(this.props.question);
  };

  onEditClick = () => {
    this.props.openEditDialog(this.props.question);
  };

  props: {
    question: Question,
    openModal: Question => void,
    openEditDialog?: Question => void,
  };

  render() {
    return (
      <li className={s.questionItem}>
        {this.props.openEditDialog &&
          <div className={s.iconWrapper}>
            <button className={s.questionButton} onClick={this.onEditClick}>
              <FaEdit />
            </button>
          </div>}
        <button className={s.questionButton} onClick={this.onOpenClick}>
          {this.props.question.title}
        </button>
      </li>
    );
  }
}

export default withStyles(s)(QuestionItem);
