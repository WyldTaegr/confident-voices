/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTherapist = /* GraphQL */ `
  query GetTherapist($id: ID!) {
    getTherapist(id: $id) {
      id
      parent
      students {
        items {
          id
          createdAt
          updatedAt
          therapistStudentsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      studentParentsId
      __typename
    }
  }
`;
export const listTherapists = /* GraphQL */ `
  query ListTherapists(
    $filter: ModelTherapistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTherapists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        parent
        students {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        studentParentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
      id
      therapist {
        id
        parent
        students {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        studentParentsId
        __typename
      }
      parents {
        items {
          id
          parent
          createdAt
          updatedAt
          studentParentsId
          __typename
        }
        nextToken
        __typename
      }
      progress {
        items {
          id
          createdAt
          updatedAt
          studentProgressId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      therapistStudentsId
      __typename
    }
  }
`;
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        therapist {
          id
          parent
          createdAt
          updatedAt
          studentParentsId
          __typename
        }
        parents {
          nextToken
          __typename
        }
        progress {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        therapistStudentsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
      id
      questions {
        items {
          id
          createdAt
          updatedAt
          exerciseQuestionsId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        questions {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      createdAt
      updatedAt
      exerciseQuestionsId
      __typename
    }
  }
`;
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        exerciseQuestionsId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getExerciseProgress = /* GraphQL */ `
  query GetExerciseProgress($id: ID!) {
    getExerciseProgress(id: $id) {
      id
      student {
        id
        therapist {
          id
          parent
          createdAt
          updatedAt
          studentParentsId
          __typename
        }
        parents {
          nextToken
          __typename
        }
        progress {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        therapistStudentsId
        __typename
      }
      progress {
        items {
          id
          completed
          createdAt
          updatedAt
          exerciseProgressProgressId
          questionProgressQuestionId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      studentProgressId
      __typename
    }
  }
`;
export const listExerciseProgresses = /* GraphQL */ `
  query ListExerciseProgresses(
    $filter: ModelExerciseProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExerciseProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        student {
          id
          createdAt
          updatedAt
          therapistStudentsId
          __typename
        }
        progress {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        studentProgressId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getQuestionProgress = /* GraphQL */ `
  query GetQuestionProgress($id: ID!) {
    getQuestionProgress(id: $id) {
      id
      exerciseProgress {
        id
        student {
          id
          createdAt
          updatedAt
          therapistStudentsId
          __typename
        }
        progress {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        studentProgressId
        __typename
      }
      question {
        id
        createdAt
        updatedAt
        exerciseQuestionsId
        __typename
      }
      completed
      createdAt
      updatedAt
      exerciseProgressProgressId
      questionProgressQuestionId
      __typename
    }
  }
`;
export const listQuestionProgresses = /* GraphQL */ `
  query ListQuestionProgresses(
    $filter: ModelQuestionProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exerciseProgress {
          id
          createdAt
          updatedAt
          studentProgressId
          __typename
        }
        question {
          id
          createdAt
          updatedAt
          exerciseQuestionsId
          __typename
        }
        completed
        createdAt
        updatedAt
        exerciseProgressProgressId
        questionProgressQuestionId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
