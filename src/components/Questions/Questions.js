import React from 'react';
import { graphql, compose } from 'react-apollo';
import Modal from 'react-modal';
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

  state = {
    current: null,
  };

  openModal = question => {
    this.setState({ current: question });
  };

  afterOpenModal = () => {
    // Do something else
  };

  closeModal = () => {
    this.setState({ current: null });
  };

  embedLink = id => `https://www.youtube.com/embed/${id}`;

  render() {
    const { loading, questions } = this.props.data;
    return (
      <div>
        {loading && <span className={s.loading}>Loading...</span>}
        <ul className={s.questions}>
          {questions &&
            questions.map(question =>
              <QuestionItem
                key={question.id}
                question={question}
                openModal={this.openModal}
              />,
            )}
        </ul>
        <Modal
          isOpen={this.state.current}
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
            title={
              this.state.current ? this.state.current.title : 'No opened video'
            }
            src={
              this.state.current
                ? this.embedLink(this.state.current.videoUrl)
                : 'no-link'
            }
            width="100%"
            height="400px"
            allowFullScreen
          />
          <h3>
            {' '}{this.state.current
              ? this.state.current.title
              : 'No opened video'}{' '}
          </h3>
        </Modal>
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
