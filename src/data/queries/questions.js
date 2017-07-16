import { GraphQLList as List, GraphQLString } from 'graphql';
import QuestionType from '../types/QuestionType';
import Question from '../models/Question';

const questions = {
  type: new List(QuestionType),
  args: {
    search: {
      description: 'Search string',
      type: GraphQLString,
    },
  },
  resolve(root, { search }) {
    const dataset = search
      ? Question.findAll({
          where: {
            title: {
              $like: `%${search}%`,
            },
          },
        })
      : Question.all();
    return dataset.then(instances =>
      instances.map(q => ({
        id: q.id,
        title: q.title,
        videoUrl: q.videoUrl,
      })),
    );
  },
};

export default questions;
