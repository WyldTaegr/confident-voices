/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTherapist = /* GraphQL */ `
  subscription OnCreateTherapist(
    $filter: ModelSubscriptionTherapistFilterInput
  ) {
    onCreateTherapist(filter: $filter) {
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
export const onUpdateTherapist = /* GraphQL */ `
  subscription OnUpdateTherapist(
    $filter: ModelSubscriptionTherapistFilterInput
  ) {
    onUpdateTherapist(filter: $filter) {
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
export const onDeleteTherapist = /* GraphQL */ `
  subscription OnDeleteTherapist(
    $filter: ModelSubscriptionTherapistFilterInput
  ) {
    onDeleteTherapist(filter: $filter) {
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
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
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
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
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
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
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
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
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
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
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
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onCreateQuestion(filter: $filter) {
      id
      createdAt
      updatedAt
      exerciseQuestionsId
      __typename
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onUpdateQuestion(filter: $filter) {
      id
      createdAt
      updatedAt
      exerciseQuestionsId
      __typename
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onDeleteQuestion(filter: $filter) {
      id
      createdAt
      updatedAt
      exerciseQuestionsId
      __typename
    }
  }
`;
export const onCreateExerciseProgress = /* GraphQL */ `
  subscription OnCreateExerciseProgress(
    $filter: ModelSubscriptionExerciseProgressFilterInput
  ) {
    onCreateExerciseProgress(filter: $filter) {
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
export const onUpdateExerciseProgress = /* GraphQL */ `
  subscription OnUpdateExerciseProgress(
    $filter: ModelSubscriptionExerciseProgressFilterInput
  ) {
    onUpdateExerciseProgress(filter: $filter) {
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
export const onDeleteExerciseProgress = /* GraphQL */ `
  subscription OnDeleteExerciseProgress(
    $filter: ModelSubscriptionExerciseProgressFilterInput
  ) {
    onDeleteExerciseProgress(filter: $filter) {
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
export const onCreateQuestionProgress = /* GraphQL */ `
  subscription OnCreateQuestionProgress(
    $filter: ModelSubscriptionQuestionProgressFilterInput
  ) {
    onCreateQuestionProgress(filter: $filter) {
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
export const onUpdateQuestionProgress = /* GraphQL */ `
  subscription OnUpdateQuestionProgress(
    $filter: ModelSubscriptionQuestionProgressFilterInput
  ) {
    onUpdateQuestionProgress(filter: $filter) {
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
export const onDeleteQuestionProgress = /* GraphQL */ `
  subscription OnDeleteQuestionProgress(
    $filter: ModelSubscriptionQuestionProgressFilterInput
  ) {
    onDeleteQuestionProgress(filter: $filter) {
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
