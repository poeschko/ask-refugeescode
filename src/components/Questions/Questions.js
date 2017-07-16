// @flow

import React from 'react';
import { graphql, compose } from 'react-apollo';
import Modal from 'react-modal';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import questionsQuery from './questions.graphql';
import editQuestionQuery from './editQuestion.graphql';

import QuestionItem from '../QuestionItem';
import EditQuestionDialog from '../EditQuestionDialog';

import s from './Questions.css';

import type Question from '../../data/flow/Question';

const customStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  content: {
    position: 'absolute',
    padding: '0px',
    width: '800px',
    height: '500px',
    margin: '0px auto',
    background: '#fff',
    WebkitOverflowScrolling: 'touch',
    overflow: 'hidden',
    borderRadius: '0px',
    border: '0px',
  },
};

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

  embedLink = id => `https://www.youtube.com/embed/${id}`;

  props: {
    data: {
      loading: boolean,
      questions: Question[],
    },
    editQuestionMutation: Function,
    search: string,
  };

  renderQuestionDialog() {
    const { current, editing } = this.state;
    return (
      <Modal
        isOpen={!editing && current}
        onRequestClose={this.closeModal}
        style={customStyles}
        contentLabel="Answer Video"
      >
        <iframe
          title={current ? current.title : 'No opened video'}
          src={current ? this.embedLink(current.videoUrl) : 'no-link'}
          width={customStyles.content.width}
          height="400px"
          allowFullScreen
        />
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
    const { loading, questions } = this.props.data;
    return (
      <div>
        <button onClick={this.onAddQuestionClick}>Add a question</button>
        {loading && <span className={s.loading}>Loading...</span>}
        <ul className={s.questions}>
          {questions &&
            questions.map(question =>
              <QuestionItem
                key={question.id}
                question={question}
                openModal={this.openModal}
                openEditDialog={this.openEditDialog}
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
    options: ({ search }) => ({ variables: { search } }),
  }),
  graphql(editQuestionQuery, { name: 'editQuestionMutation' }),
)(Questions);
