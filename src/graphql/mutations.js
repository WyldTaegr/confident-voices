/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTherapist = /* GraphQL */ `
  mutation CreateTherapist(
    $input: CreateTherapistInput!
    $condition: ModelTherapistConditionInput
  ) {
    createTherapist(input: $input, condition: $condition) {
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
export const updateTherapist = /* GraphQL */ `
  mutation UpdateTherapist(
    $input: UpdateTherapistInput!
    $condition: ModelTherapistConditionInput
  ) {
    updateTherapist(input: $input, condition: $condition) {
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
export const deleteTherapist = /* GraphQL */ `
  mutation DeleteTherapist(
    $input: DeleteTherapistInput!
    $condition: ModelTherapistConditionInput
  ) {
    deleteTherapist(input: $input, condition: $condition) {
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
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
export const updateStudent = /* GraphQL */ `
  mutation UpdateStudent(
    $input: UpdateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    updateStudent(input: $input, condition: $condition) {
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
export const deleteStudent = /* GraphQL */ `
  mutation DeleteStudent(
    $input: DeleteStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    deleteStudent(input: $input, condition: $condition) {
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
export const createExercise = /* GraphQL */ `
  mutation CreateExercise(
    $input: CreateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    createExercise(input: $input, condition: $condition) {
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
export const updateExercise = /* GraphQL */ `
  mutation UpdateExercise(
    $input: UpdateExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    updateExercise(input: $input, condition: $condition) {
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
export const deleteExercise = /* GraphQL */ `
  mutation DeleteExercise(
    $input: DeleteExerciseInput!
    $condition: ModelExerciseConditionInput
  ) {
    deleteExercise(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      exerciseQuestionsId
      __typename
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      exerciseQuestionsId
      __typename
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      exerciseQuestionsId
      __typename
    }
  }
`;
export const createExerciseProgress = /* GraphQL */ `
  mutation CreateExerciseProgress(
    $input: CreateExerciseProgressInput!
    $condition: ModelExerciseProgressConditionInput
  ) {
    createExerciseProgress(input: $input, condition: $condition) {
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
export const updateExerciseProgress = /* GraphQL */ `
  mutation UpdateExerciseProgress(
    $input: UpdateExerciseProgressInput!
    $condition: ModelExerciseProgressConditionInput
  ) {
    updateExerciseProgress(input: $input, condition: $condition) {
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
export const deleteExerciseProgress = /* GraphQL */ `
  mutation DeleteExerciseProgress(
    $input: DeleteExerciseProgressInput!
    $condition: ModelExerciseProgressConditionInput
  ) {
    deleteExerciseProgress(input: $input, condition: $condition) {
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
export const createQuestionProgress = /* GraphQL */ `
  mutation CreateQuestionProgress(
    $input: CreateQuestionProgressInput!
    $condition: ModelQuestionProgressConditionInput
  ) {
    createQuestionProgress(input: $input, condition: $condition) {
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
export const updateQuestionProgress = /* GraphQL */ `
  mutation UpdateQuestionProgress(
    $input: UpdateQuestionProgressInput!
    $condition: ModelQuestionProgressConditionInput
  ) {
    updateQuestionProgress(input: $input, condition: $condition) {
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
export const deleteQuestionProgress = /* GraphQL */ `
  mutation DeleteQuestionProgress(
    $input: DeleteQuestionProgressInput!
    $condition: ModelQuestionProgressConditionInput
  ) {
    deleteQuestionProgress(input: $input, condition: $condition) {
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
