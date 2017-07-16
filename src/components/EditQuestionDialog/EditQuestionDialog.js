// @flow

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Modal from 'react-modal';

import s from './EditQuestionDialog.css';

import type Question from '../../data/flow/Question';

class EditQuestionDialog extends React.Component {
  state = {
    title: this.props.question ? this.props.question.title : '',
    videoUrl: this.props.question ? this.props.question.videoUrl : '',
  };

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    });
  };

  onChangeVideoUrl = event => {
    this.setState({
      videoUrl: event.target.value,
    });
  };

  onConfirmClick = () => {
    this.props.onConfirm({
      id: this.props.question ? this.props.question.id : null,
      title: this.state.title,
      videoUrl: this.state.videoUrl,
    });
  };

  onCancelClick = () => {
    this.props.onCancel();
  };

  props: {
    isOpen: boolean,
    isCreating: boolean,
    question: Question,
    onConfirm: (data: Question) => void,
    onCancel: () => void,
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.onCancelClick}
        className={{ base: s.dialog }}
        overlayClassName={{ base: s.overlayDialog }}
      >
        <table className={s.formTable}>
          <tbody>
            <tr>
              <th>Title:</th>
              <td>
                <input value={this.state.title} onChange={this.onChangeTitle} />
              </td>
            </tr>
            <tr>
              <th>Video URL:</th>
              <td>
                <input
                  value={this.state.videoUrl}
                  onChange={this.onChangeVideoUrl}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button className={s.buttonStyle} onClick={this.onConfirmClick}>
          {this.props.isCreating ? 'Create' : 'Save'}
        </button>
        <button className={s.buttonStyle} onClick={this.onCancelClick}>
          Cancel
        </button>
      </Modal>
    );
  }
}

export default withStyles(s)(EditQuestionDialog);
