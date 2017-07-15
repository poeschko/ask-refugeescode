import DataType from 'sequelize';
import Model from '../sequelize';

const Question = Model.define('Question', {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV1,
    primaryKey: true,
  },

  title: {
    type: DataType.STRING(255),
  },

  videoUrl: {
    type: DataType.STRING(255),
    defaultValue: false,
    validate: { isUrl: true },
  },
});

export default Question;
