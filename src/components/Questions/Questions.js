// @flow

import React from 'react';
import { graphql, compose } from 'react-apollo';
import Modal from 'react-modal';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import questionsQuery from './questions.graphql';
import editQuestionQuery from './editQuestion.graphql';
import meQuery from '../Layout/me.graphql';
import canEdit from '../../data/canEdit';

import QuestionItem from '../QuestionItem';
import EditQuestionDialog from '../EditQuestionDialog';

import s from './Questions.css';

import type Question from '../../data/flow/Question';

class Questions extends React.Component {
  state = {
    current: null,
    editing: false,
  };

  onSaveQuestion = (question: Question) => {
    this.props.editQuestionMutation({
      variables: {
        id: question.id,
        title: question.title,
        videoUrl: question.videoUrl,
      },
      refetchQueries: [
        {
          query: questionsQuery,
          variables: { search: this.props.search },
        },
      ],
    });
    this.closeModal();
  };

  onAddQuestionClick = () => {
    this.setState({ current: null, editing: true });
  };

  openModal = question => {
    this.setState({ current: question, editing: false });
  };

  openEditDialog = question => {
    this.setState({ current: question, editing: true });
  };

  closeModal = () => {
    this.setState({ current: null, editing: false });
  };

  props: {
    questionsData: {
      loading: boolean,
      questions: Question[],
    },
    meData: {
      loading: boolean,
      me?: {
        id: string, // eslint-disable-line react/no-unused-prop-types
        email: string, // eslint-disable-line react/no-unused-prop-types
      },
    },
    editQuestionMutation: Function,
    search: string,
  };

  renderQuestionDialog() {
    return (
      <Modal
        isOpen={!!this.state.current && !this.state.editing}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Answer Video"
        className={{
          base: s.questionDialog,
          afterOpen: 'questionDialogBg_after-open',
          beforeClose: 'questionDialogBg_before-close',
        }}
        overlayClassName={{
          base: s.questionDialogBg,
          afterOpen: 'questionDialog_after-open',
          beforeClose: 'questionDialog_before-close',
        }}
      >
        <iframe
          className={s.youtubeFrame}
          title={
            this.state.current ? this.state.current.title : 'No opened video'
          }
          src={this.state.current ? this.state.current.videoUrl : 'no-link'}
          width="100%"
          height="450px"
          allowFullScreen
        />
        <h3 className={s.questionDialogTitle}>
          {' '}{this.state.current
            ? this.state.current.title
            : 'No opened video'}{' '}
        </h3>
      </Modal>
    );
  }

  renderEditDialog() {
    const { current, editing } = this.state;
    if (editing) {
      return (
        <EditQuestionDialog
          isOpen={editing}
          question={current}
          isCreating={!current}
          onConfirm={this.onSaveQuestion}
          onCancel={this.closeModal}
        />
      );
    }
    return null;
  }

  render() {
    const { loading, questions } = this.props.questionsData;
    const { me } = this.props.meData;
    const editable = canEdit(me);
    return (
      <div>
        {editable &&
          <button
            className={s.addQuestionButton}
            onClick={this.onAddQuestionClick}
          >
            Add a question
          </button>}
        {loading && <span className={s.loading}>Loading...</span>}
        <ul className={s.questions}>
          {questions &&
            questions.map(question =>
              <QuestionItem
                key={question.id}
                question={question}
                openModal={this.openModal}
                openEditDialog={editable ? this.openEditDialog : null}
              />,
            )}
        </ul>
        {this.renderQuestionDialog()}
        {this.renderEditDialog()}
      </div>
    );
  }
}

export default compose(
  withStyles(s),
  graphql(questionsQuery, {
    name: 'questionsData',
    options: ({ search }) => ({ variables: { search } }),
  }),
  graphql(editQuestionQuery, { name: 'editQuestionMutation' }),
  graphql(meQuery, {
    name: 'meData',
  }),
)(Questions);
