import React from 'react';
import { graphql, compose } from 'react-apollo';
import Modal from 'react-modal';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import questionsQuery from './questions.graphql';

import QuestionItem from '../QuestionItem';

import s from './Questions.css';

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
          style={customStyles}
          contentLabel="Answer Video"
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
            width={customStyles.content.width}
            height="400px"
            allowFullScreen
          />
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
