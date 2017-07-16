import React from 'react';
import Modal from 'react-modal';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';

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
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        videoUrl: PropTypes.string,
      }),
    ).isRequired,
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
    return (
      <div className={s.questions}>
        {this.props.questions.map(question =>
          <QuestionItem question={question} openModal={this.openModal} />,
        )}

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

export default withStyles(s)(Questions);
