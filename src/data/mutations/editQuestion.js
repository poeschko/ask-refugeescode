import { GraphQLString } from 'graphql';
import QuestionType from '../types/QuestionType';
import Question from '../models/Question';
import canEdit from '../canEdit';

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
  resolve({ request }, { id, title, videoUrl }) {
    if (!canEdit(request.user)) {
      throw new Error('Not authorized to edit questions');
    }
    if (id) {
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
    }
    return Question.create({ title, videoUrl }).then(question => ({
      id: question.id,
      title: question.title,
      videoUrl: question.videoUrl,
    }));
  },
};

export default editQuestion;
