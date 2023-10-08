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
          therapistId
          studentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      children {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
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
          therapistId
          studentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      children {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
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
          therapistId
          studentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      children {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
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
export const createStudent = /* GraphQL */ `
  mutation CreateStudent(
    $input: CreateStudentInput!
    $condition: ModelStudentConditionInput
  ) {
    createStudent(input: $input, condition: $condition) {
      id
      therapists {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      parents {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      progress {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      therapists {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      parents {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      progress {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
      therapists {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      parents {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      progress {
        nextToken
        __typename
      }
      createdAt
      updatedAt
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
        therapists {
          nextToken
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
        therapists {
          nextToken
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
        therapists {
          nextToken
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
export const createPostInfo = /* GraphQL */ `
  mutation CreatePostInfo(
    $input: CreatePostInfoInput!
    $condition: ModelPostInfoConditionInput
  ) {
    createPostInfo(input: $input, condition: $condition) {
      title
      tags
      description
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updatePostInfo = /* GraphQL */ `
  mutation UpdatePostInfo(
    $input: UpdatePostInfoInput!
    $condition: ModelPostInfoConditionInput
  ) {
    updatePostInfo(input: $input, condition: $condition) {
      title
      tags
      description
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deletePostInfo = /* GraphQL */ `
  mutation DeletePostInfo(
    $input: DeletePostInfoInput!
    $condition: ModelPostInfoConditionInput
  ) {
    deletePostInfo(input: $input, condition: $condition) {
      title
      tags
      description
      id
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTherapistsStudents = /* GraphQL */ `
  mutation CreateTherapistsStudents(
    $input: CreateTherapistsStudentsInput!
    $condition: ModelTherapistsStudentsConditionInput
  ) {
    createTherapistsStudents(input: $input, condition: $condition) {
      id
      therapistId
      studentId
      therapist {
        id
        parent
        students {
          nextToken
          __typename
        }
        children {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      student {
        id
        therapists {
          nextToken
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTherapistsStudents = /* GraphQL */ `
  mutation UpdateTherapistsStudents(
    $input: UpdateTherapistsStudentsInput!
    $condition: ModelTherapistsStudentsConditionInput
  ) {
    updateTherapistsStudents(input: $input, condition: $condition) {
      id
      therapistId
      studentId
      therapist {
        id
        parent
        students {
          nextToken
          __typename
        }
        children {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      student {
        id
        therapists {
          nextToken
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTherapistsStudents = /* GraphQL */ `
  mutation DeleteTherapistsStudents(
    $input: DeleteTherapistsStudentsInput!
    $condition: ModelTherapistsStudentsConditionInput
  ) {
    deleteTherapistsStudents(input: $input, condition: $condition) {
      id
      therapistId
      studentId
      therapist {
        id
        parent
        students {
          nextToken
          __typename
        }
        children {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      student {
        id
        therapists {
          nextToken
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createParentsChildren = /* GraphQL */ `
  mutation CreateParentsChildren(
    $input: CreateParentsChildrenInput!
    $condition: ModelParentsChildrenConditionInput
  ) {
    createParentsChildren(input: $input, condition: $condition) {
      id
      therapistId
      studentId
      therapist {
        id
        parent
        students {
          nextToken
          __typename
        }
        children {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      student {
        id
        therapists {
          nextToken
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateParentsChildren = /* GraphQL */ `
  mutation UpdateParentsChildren(
    $input: UpdateParentsChildrenInput!
    $condition: ModelParentsChildrenConditionInput
  ) {
    updateParentsChildren(input: $input, condition: $condition) {
      id
      therapistId
      studentId
      therapist {
        id
        parent
        students {
          nextToken
          __typename
        }
        children {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      student {
        id
        therapists {
          nextToken
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteParentsChildren = /* GraphQL */ `
  mutation DeleteParentsChildren(
    $input: DeleteParentsChildrenInput!
    $condition: ModelParentsChildrenConditionInput
  ) {
    deleteParentsChildren(input: $input, condition: $condition) {
      id
      therapistId
      studentId
      therapist {
        id
        parent
        students {
          nextToken
          __typename
        }
        children {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      student {
        id
        therapists {
          nextToken
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
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
