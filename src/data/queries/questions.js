import { GraphQLList as List } from 'graphql';
import QuestionType from '../types/QuestionType';
import Question from '../models/Question';

const questions = {
  type: new List(QuestionType),
  resolve() {
    return Question.all().then(instances =>
      instances.map(q => ({
        id: q.id,
        title: q.title,
        videoUrl: q.videoUrl,
      })),
    );
  },
};

export default questions;
