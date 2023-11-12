import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly active: string;
  readonly therapist?: Therapist | null;
  readonly student?: Student | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTherapistId?: string | null;
  readonly userStudentId?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly active: string;
  readonly therapist: AsyncItem<Therapist | undefined>;
  readonly student: AsyncItem<Student | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userTherapistId?: string | null;
  readonly userStudentId?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerTherapist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Therapist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly parent: boolean;
  readonly students?: (TherapistsStudents | null)[] | null;
  readonly children?: (ParentsChildren | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly therapistUserId?: string | null;
}

type LazyTherapist = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Therapist, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly parent: boolean;
  readonly students: AsyncCollection<TherapistsStudents>;
  readonly children: AsyncCollection<ParentsChildren>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly therapistUserId?: string | null;
}

export declare type Therapist = LazyLoading extends LazyLoadingDisabled ? EagerTherapist : LazyTherapist

export declare const Therapist: (new (init: ModelInit<Therapist>) => Therapist) & {
  copyOf(source: Therapist, mutator: (draft: MutableModel<Therapist>) => MutableModel<Therapist> | void): Therapist;
}

type EagerStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user?: User | null;
  readonly therapists?: (TherapistsStudents | null)[] | null;
  readonly parents?: (ParentsChildren | null)[] | null;
  readonly progress?: (ExerciseProgress | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly studentUserId?: string | null;
}

type LazyStudent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Student, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly user: AsyncItem<User | undefined>;
  readonly therapists: AsyncCollection<TherapistsStudents>;
  readonly parents: AsyncCollection<ParentsChildren>;
  readonly progress: AsyncCollection<ExerciseProgress>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly studentUserId?: string | null;
}

export declare type Student = LazyLoading extends LazyLoadingDisabled ? EagerStudent : LazyStudent

export declare const Student: (new (init: ModelInit<Student>) => Student) & {
  copyOf(source: Student, mutator: (draft: MutableModel<Student>) => MutableModel<Student> | void): Student;
}

type EagerExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exercise, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly questions?: (Question | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExercise = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exercise, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly questions: AsyncCollection<Question>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Exercise = LazyLoading extends LazyLoadingDisabled ? EagerExercise : LazyExercise

export declare const Exercise: (new (init: ModelInit<Exercise>) => Exercise) & {
  copyOf(source: Exercise, mutator: (draft: MutableModel<Exercise>) => MutableModel<Exercise> | void): Exercise;
}

type EagerQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly example?: S3Object | null;
  readonly exerciseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionExampleId?: string | null;
}

type LazyQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Question, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly example: AsyncItem<S3Object | undefined>;
  readonly exerciseID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly questionExampleId?: string | null;
}

export declare type Question = LazyLoading extends LazyLoadingDisabled ? EagerQuestion : LazyQuestion

export declare const Question: (new (init: ModelInit<Question>) => Question) & {
  copyOf(source: Question, mutator: (draft: MutableModel<Question>) => MutableModel<Question> | void): Question;
}

type EagerExerciseProgress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseProgress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly student: Student;
  readonly progress?: (QuestionProgress | null)[] | null;
  readonly studentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly studentProgressId: string;
}

type LazyExerciseProgress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ExerciseProgress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly student: AsyncItem<Student>;
  readonly progress: AsyncCollection<QuestionProgress>;
  readonly studentID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly studentProgressId: string;
}

export declare type ExerciseProgress = LazyLoading extends LazyLoadingDisabled ? EagerExerciseProgress : LazyExerciseProgress

export declare const ExerciseProgress: (new (init: ModelInit<ExerciseProgress>) => ExerciseProgress) & {
  copyOf(source: ExerciseProgress, mutator: (draft: MutableModel<ExerciseProgress>) => MutableModel<ExerciseProgress> | void): ExerciseProgress;
}

type EagerQuestionProgress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuestionProgress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly exerciseProgress: ExerciseProgress;
  readonly question: Question;
  readonly completed: boolean;
  readonly submissions?: (S3Object | null)[] | null;
  readonly exerciseprogressID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly exerciseProgressProgressId: string;
  readonly questionProgressQuestionId: string;
}

type LazyQuestionProgress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuestionProgress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly exerciseProgress: AsyncItem<ExerciseProgress>;
  readonly question: AsyncItem<Question>;
  readonly completed: boolean;
  readonly submissions: AsyncCollection<S3Object>;
  readonly exerciseprogressID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly exerciseProgressProgressId: string;
  readonly questionProgressQuestionId: string;
}

export declare type QuestionProgress = LazyLoading extends LazyLoadingDisabled ? EagerQuestionProgress : LazyQuestionProgress

export declare const QuestionProgress: (new (init: ModelInit<QuestionProgress>) => QuestionProgress) & {
  copyOf(source: QuestionProgress, mutator: (draft: MutableModel<QuestionProgress>) => MutableModel<QuestionProgress> | void): QuestionProgress;
}

type EagerS3Object = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<S3Object, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly key?: string | null;
  readonly questionprogressID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyS3Object = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<S3Object, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly key?: string | null;
  readonly questionprogressID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type S3Object = LazyLoading extends LazyLoadingDisabled ? EagerS3Object : LazyS3Object

export declare const S3Object: (new (init: ModelInit<S3Object>) => S3Object) & {
  copyOf(source: S3Object, mutator: (draft: MutableModel<S3Object>) => MutableModel<S3Object> | void): S3Object;
}

type EagerPostInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly tags: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPostInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly tags: string;
  readonly description: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PostInfo = LazyLoading extends LazyLoadingDisabled ? EagerPostInfo : LazyPostInfo

export declare const PostInfo: (new (init: ModelInit<PostInfo>) => PostInfo) & {
  copyOf(source: PostInfo, mutator: (draft: MutableModel<PostInfo>) => MutableModel<PostInfo> | void): PostInfo;
}

type EagerTherapistsStudents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TherapistsStudents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly therapistId?: string | null;
  readonly studentId?: string | null;
  readonly therapist: Therapist;
  readonly student: Student;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTherapistsStudents = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TherapistsStudents, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly therapistId?: string | null;
  readonly studentId?: string | null;
  readonly therapist: AsyncItem<Therapist>;
  readonly student: AsyncItem<Student>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TherapistsStudents = LazyLoading extends LazyLoadingDisabled ? EagerTherapistsStudents : LazyTherapistsStudents

export declare const TherapistsStudents: (new (init: ModelInit<TherapistsStudents>) => TherapistsStudents) & {
  copyOf(source: TherapistsStudents, mutator: (draft: MutableModel<TherapistsStudents>) => MutableModel<TherapistsStudents> | void): TherapistsStudents;
}

type EagerParentsChildren = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ParentsChildren, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly therapistId?: string | null;
  readonly studentId?: string | null;
  readonly therapist: Therapist;
  readonly student: Student;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyParentsChildren = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ParentsChildren, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly therapistId?: string | null;
  readonly studentId?: string | null;
  readonly therapist: AsyncItem<Therapist>;
  readonly student: AsyncItem<Student>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ParentsChildren = LazyLoading extends LazyLoadingDisabled ? EagerParentsChildren : LazyParentsChildren

export declare const ParentsChildren: (new (init: ModelInit<ParentsChildren>) => ParentsChildren) & {
  copyOf(source: ParentsChildren, mutator: (draft: MutableModel<ParentsChildren>) => MutableModel<ParentsChildren> | void): ParentsChildren;
}