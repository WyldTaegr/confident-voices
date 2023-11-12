// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Therapist, Student, Exercise, Question, ExerciseProgress, QuestionProgress, S3Object, PostInfo, TherapistsStudents, ParentsChildren } = initSchema(schema);

export {
  User,
  Therapist,
  Student,
  Exercise,
  Question,
  ExerciseProgress,
  QuestionProgress,
  S3Object,
  PostInfo,
  TherapistsStudents,
  ParentsChildren
};