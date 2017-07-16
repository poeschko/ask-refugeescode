import { GraphQLString } from 'graphql';
import QuestionType from '../types/QuestionType';
import Question from '../models/Question';

const editQuestion = {
  type: QuestionType,
  args: {
    id: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    videoUrl: {
      type: GraphQLString,
    },
  },
  resolve(root, { id, title, videoUrl }) {
    return Question.findById(id).then(question =>
      question
        .update({
          title,
          videoUrl,
        })
        .then(() => ({
          id,
          title: question.title,
          videoUrl: question.videoUrl,
        })),
    );
  },
};

export default editQuestion;
