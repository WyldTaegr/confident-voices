/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      active
      therapist {
        id
        parent
        createdAt
        updatedAt
        therapistUserId
        __typename
      }
      student {
        id
        createdAt
        updatedAt
        studentUserId
        __typename
      }
      createdAt
      updatedAt
      userTherapistId
      userStudentId
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      active
      therapist {
        id
        parent
        createdAt
        updatedAt
        therapistUserId
        __typename
      }
      student {
        id
        createdAt
        updatedAt
        studentUserId
        __typename
      }
      createdAt
      updatedAt
      userTherapistId
      userStudentId
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      active
      therapist {
        id
        parent
        createdAt
        updatedAt
        therapistUserId
        __typename
      }
      student {
        id
        createdAt
        updatedAt
        studentUserId
        __typename
      }
      createdAt
      updatedAt
      userTherapistId
      userStudentId
      __typename
    }
  }
`;
export const createTherapist = /* GraphQL */ `
  mutation CreateTherapist(
    $input: CreateTherapistInput!
    $condition: ModelTherapistConditionInput
  ) {
    createTherapist(input: $input, condition: $condition) {
      id
      user {
        id
        active
        createdAt
        updatedAt
        userTherapistId
        userStudentId
        __typename
      }
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
      therapistUserId
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
      user {
        id
        active
        createdAt
        updatedAt
        userTherapistId
        userStudentId
        __typename
      }
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
      therapistUserId
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
      user {
        id
        active
        createdAt
        updatedAt
        userTherapistId
        userStudentId
        __typename
      }
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
      therapistUserId
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
      user {
        id
        active
        createdAt
        updatedAt
        userTherapistId
        userStudentId
        __typename
      }
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
      studentUserId
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
      user {
        id
        active
        createdAt
        updatedAt
        userTherapistId
        userStudentId
        __typename
      }
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
      studentUserId
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
      user {
        id
        active
        createdAt
        updatedAt
        userTherapistId
        userStudentId
        __typename
      }
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
      studentUserId
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
      name
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
      name
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
      name
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
      description
      example {
        id
        name
        key
        questionprogressID
        createdAt
        updatedAt
        __typename
      }
      exerciseID
      createdAt
      updatedAt
      questionExampleId
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
      description
      example {
        id
        name
        key
        questionprogressID
        createdAt
        updatedAt
        __typename
      }
      exerciseID
      createdAt
      updatedAt
      questionExampleId
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
      description
      example {
        id
        name
        key
        questionprogressID
        createdAt
        updatedAt
        __typename
      }
      exerciseID
      createdAt
      updatedAt
      questionExampleId
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
        createdAt
        updatedAt
        studentUserId
        __typename
      }
      progress {
        nextToken
        __typename
      }
      studentID
      createdAt
      updatedAt
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
        createdAt
        updatedAt
        studentUserId
        __typename
      }
      progress {
        nextToken
        __typename
      }
      studentID
      createdAt
      updatedAt
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
        createdAt
        updatedAt
        studentUserId
        __typename
      }
      progress {
        nextToken
        __typename
      }
      studentID
      createdAt
      updatedAt
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
        studentID
        createdAt
        updatedAt
        __typename
      }
      question {
        id
        description
        exerciseID
        createdAt
        updatedAt
        questionExampleId
        __typename
      }
      completed
      submissions {
        nextToken
        __typename
      }
      exerciseprogressID
      createdAt
      updatedAt
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
        studentID
        createdAt
        updatedAt
        __typename
      }
      question {
        id
        description
        exerciseID
        createdAt
        updatedAt
        questionExampleId
        __typename
      }
      completed
      submissions {
        nextToken
        __typename
      }
      exerciseprogressID
      createdAt
      updatedAt
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
        studentID
        createdAt
        updatedAt
        __typename
      }
      question {
        id
        description
        exerciseID
        createdAt
        updatedAt
        questionExampleId
        __typename
      }
      completed
      submissions {
        nextToken
        __typename
      }
      exerciseprogressID
      createdAt
      updatedAt
      questionProgressQuestionId
      __typename
    }
  }
`;
export const createS3Object = /* GraphQL */ `
  mutation CreateS3Object(
    $input: CreateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    createS3Object(input: $input, condition: $condition) {
      id
      name
      key
      questionprogressID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateS3Object = /* GraphQL */ `
  mutation UpdateS3Object(
    $input: UpdateS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    updateS3Object(input: $input, condition: $condition) {
      id
      name
      key
      questionprogressID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteS3Object = /* GraphQL */ `
  mutation DeleteS3Object(
    $input: DeleteS3ObjectInput!
    $condition: ModelS3ObjectConditionInput
  ) {
    deleteS3Object(input: $input, condition: $condition) {
      id
      name
      key
      questionprogressID
      createdAt
      updatedAt
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
      likes
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
      likes
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
      likes
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
        createdAt
        updatedAt
        therapistUserId
        __typename
      }
      student {
        id
        createdAt
        updatedAt
        studentUserId
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
        createdAt
        updatedAt
        therapistUserId
        __typename
      }
      student {
        id
        createdAt
        updatedAt
        studentUserId
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
        createdAt
        updatedAt
        therapistUserId
        __typename
      }
      student {
        id
        createdAt
        updatedAt
        studentUserId
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
        createdAt
        updatedAt
        therapistUserId
        __typename
      }
      student {
        id
        createdAt
        updatedAt
        studentUserId
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
        createdAt
        updatedAt
        therapistUserId
        __typename
      }
      student {
        id
        createdAt
        updatedAt
        studentUserId
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
        createdAt
        updatedAt
        therapistUserId
        __typename
      }
      student {
        id
        createdAt
        updatedAt
        studentUserId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
