/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
      id
      active
      therapist {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        parent
        students {
          nextToken
          startedAt
          __typename
        }
        children {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapistUserId
        __typename
      }
      student {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        therapists {
          nextToken
          startedAt
          __typename
        }
        parents {
          nextToken
          startedAt
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userTherapistId
      userStudentId
      __typename
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
      id
      active
      therapist {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        parent
        students {
          nextToken
          startedAt
          __typename
        }
        children {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapistUserId
        __typename
      }
      student {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        therapists {
          nextToken
          startedAt
          __typename
        }
        parents {
          nextToken
          startedAt
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userTherapistId
      userStudentId
      __typename
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
      id
      active
      therapist {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        parent
        students {
          nextToken
          startedAt
          __typename
        }
        children {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapistUserId
        __typename
      }
      student {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        therapists {
          nextToken
          startedAt
          __typename
        }
        parents {
          nextToken
          startedAt
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userTherapistId
      userStudentId
      __typename
    }
  }
`;
export const onCreateTherapist = /* GraphQL */ `
  subscription OnCreateTherapist(
    $filter: ModelSubscriptionTherapistFilterInput
  ) {
    onCreateTherapist(filter: $filter) {
      id
      user {
        id
        active
        therapist {
          id
          parent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapistUserId
          __typename
        }
        student {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentUserId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userTherapistId
        userStudentId
        __typename
      }
      parent
      students {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      children {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      therapistUserId
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
      user {
        id
        active
        therapist {
          id
          parent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapistUserId
          __typename
        }
        student {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentUserId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userTherapistId
        userStudentId
        __typename
      }
      parent
      students {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      children {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      therapistUserId
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
      user {
        id
        active
        therapist {
          id
          parent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapistUserId
          __typename
        }
        student {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentUserId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userTherapistId
        userStudentId
        __typename
      }
      parent
      students {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      children {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      therapistUserId
      __typename
    }
  }
`;
export const onCreateStudent = /* GraphQL */ `
  subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onCreateStudent(filter: $filter) {
      id
      user {
        id
        active
        therapist {
          id
          parent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapistUserId
          __typename
        }
        student {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentUserId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userTherapistId
        userStudentId
        __typename
      }
      therapists {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      parents {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      progress {
        items {
          id
          studentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentUserId
      __typename
    }
  }
`;
export const onUpdateStudent = /* GraphQL */ `
  subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
    onUpdateStudent(filter: $filter) {
      id
      user {
        id
        active
        therapist {
          id
          parent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapistUserId
          __typename
        }
        student {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentUserId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userTherapistId
        userStudentId
        __typename
      }
      therapists {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      parents {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      progress {
        items {
          id
          studentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentUserId
      __typename
    }
  }
`;
export const onDeleteStudent = /* GraphQL */ `
  subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
    onDeleteStudent(filter: $filter) {
      id
      user {
        id
        active
        therapist {
          id
          parent
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          therapistUserId
          __typename
        }
        student {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          studentUserId
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userTherapistId
        userStudentId
        __typename
      }
      therapists {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      parents {
        items {
          id
          therapistId
          studentId
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      progress {
        items {
          id
          studentID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      studentUserId
      __typename
    }
  }
`;
export const onCreateExercise = /* GraphQL */ `
  subscription OnCreateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onCreateExercise(filter: $filter) {
      id
      name
      questions {
        items {
          id
          description
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questionExampleId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateExercise = /* GraphQL */ `
  subscription OnUpdateExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onUpdateExercise(filter: $filter) {
      id
      name
      questions {
        items {
          id
          description
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questionExampleId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteExercise = /* GraphQL */ `
  subscription OnDeleteExercise($filter: ModelSubscriptionExerciseFilterInput) {
    onDeleteExercise(filter: $filter) {
      id
      name
      questions {
        items {
          id
          description
          exerciseID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questionExampleId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onCreateQuestion(filter: $filter) {
      id
      description
      example {
        id
        name
        key
        questionprogressID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      exerciseID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questionExampleId
      __typename
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onUpdateQuestion(filter: $filter) {
      id
      description
      example {
        id
        name
        key
        questionprogressID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      exerciseID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questionExampleId
      __typename
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion($filter: ModelSubscriptionQuestionFilterInput) {
    onDeleteQuestion(filter: $filter) {
      id
      description
      example {
        id
        name
        key
        questionprogressID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      exerciseID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questionExampleId
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
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        therapists {
          nextToken
          startedAt
          __typename
        }
        parents {
          nextToken
          startedAt
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserId
        __typename
      }
      progress {
        items {
          id
          completed
          exerciseprogressID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questionProgressQuestionId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      studentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        therapists {
          nextToken
          startedAt
          __typename
        }
        parents {
          nextToken
          startedAt
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserId
        __typename
      }
      progress {
        items {
          id
          completed
          exerciseprogressID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questionProgressQuestionId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      studentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        therapists {
          nextToken
          startedAt
          __typename
        }
        parents {
          nextToken
          startedAt
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserId
        __typename
      }
      progress {
        items {
          id
          completed
          exerciseprogressID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          questionProgressQuestionId
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      studentID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          studentUserId
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        studentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      question {
        id
        description
        example {
          id
          name
          key
          questionprogressID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        exerciseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        questionExampleId
        __typename
      }
      completed
      submissions {
        items {
          id
          name
          key
          questionprogressID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      exerciseprogressID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          studentUserId
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        studentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      question {
        id
        description
        example {
          id
          name
          key
          questionprogressID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        exerciseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        questionExampleId
        __typename
      }
      completed
      submissions {
        items {
          id
          name
          key
          questionprogressID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      exerciseprogressID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
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
          _version
          _deleted
          _lastChangedAt
          studentUserId
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        studentID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      question {
        id
        description
        example {
          id
          name
          key
          questionprogressID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        exerciseID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        questionExampleId
        __typename
      }
      completed
      submissions {
        items {
          id
          name
          key
          questionprogressID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          __typename
        }
        nextToken
        startedAt
        __typename
      }
      exerciseprogressID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      questionProgressQuestionId
      __typename
    }
  }
`;
export const onCreateS3Object = /* GraphQL */ `
  subscription OnCreateS3Object($filter: ModelSubscriptionS3ObjectFilterInput) {
    onCreateS3Object(filter: $filter) {
      id
      name
      key
      questionprogressID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateS3Object = /* GraphQL */ `
  subscription OnUpdateS3Object($filter: ModelSubscriptionS3ObjectFilterInput) {
    onUpdateS3Object(filter: $filter) {
      id
      name
      key
      questionprogressID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteS3Object = /* GraphQL */ `
  subscription OnDeleteS3Object($filter: ModelSubscriptionS3ObjectFilterInput) {
    onDeleteS3Object(filter: $filter) {
      id
      name
      key
      questionprogressID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreatePostInfo = /* GraphQL */ `
  subscription OnCreatePostInfo($filter: ModelSubscriptionPostInfoFilterInput) {
    onCreatePostInfo(filter: $filter) {
      title
      tags
      description
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdatePostInfo = /* GraphQL */ `
  subscription OnUpdatePostInfo($filter: ModelSubscriptionPostInfoFilterInput) {
    onUpdatePostInfo(filter: $filter) {
      title
      tags
      description
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeletePostInfo = /* GraphQL */ `
  subscription OnDeletePostInfo($filter: ModelSubscriptionPostInfoFilterInput) {
    onDeletePostInfo(filter: $filter) {
      title
      tags
      description
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateTherapistsStudents = /* GraphQL */ `
  subscription OnCreateTherapistsStudents(
    $filter: ModelSubscriptionTherapistsStudentsFilterInput
  ) {
    onCreateTherapistsStudents(filter: $filter) {
      id
      therapistId
      studentId
      therapist {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        parent
        students {
          nextToken
          startedAt
          __typename
        }
        children {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapistUserId
        __typename
      }
      student {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        therapists {
          nextToken
          startedAt
          __typename
        }
        parents {
          nextToken
          startedAt
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateTherapistsStudents = /* GraphQL */ `
  subscription OnUpdateTherapistsStudents(
    $filter: ModelSubscriptionTherapistsStudentsFilterInput
  ) {
    onUpdateTherapistsStudents(filter: $filter) {
      id
      therapistId
      studentId
      therapist {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        parent
        students {
          nextToken
          startedAt
          __typename
        }
        children {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapistUserId
        __typename
      }
      student {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        therapists {
          nextToken
          startedAt
          __typename
        }
        parents {
          nextToken
          startedAt
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteTherapistsStudents = /* GraphQL */ `
  subscription OnDeleteTherapistsStudents(
    $filter: ModelSubscriptionTherapistsStudentsFilterInput
  ) {
    onDeleteTherapistsStudents(filter: $filter) {
      id
      therapistId
      studentId
      therapist {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        parent
        students {
          nextToken
          startedAt
          __typename
        }
        children {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapistUserId
        __typename
      }
      student {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        therapists {
          nextToken
          startedAt
          __typename
        }
        parents {
          nextToken
          startedAt
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onCreateParentsChildren = /* GraphQL */ `
  subscription OnCreateParentsChildren(
    $filter: ModelSubscriptionParentsChildrenFilterInput
  ) {
    onCreateParentsChildren(filter: $filter) {
      id
      therapistId
      studentId
      therapist {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        parent
        students {
          nextToken
          startedAt
          __typename
        }
        children {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapistUserId
        __typename
      }
      student {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        therapists {
          nextToken
          startedAt
          __typename
        }
        parents {
          nextToken
          startedAt
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onUpdateParentsChildren = /* GraphQL */ `
  subscription OnUpdateParentsChildren(
    $filter: ModelSubscriptionParentsChildrenFilterInput
  ) {
    onUpdateParentsChildren(filter: $filter) {
      id
      therapistId
      studentId
      therapist {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        parent
        students {
          nextToken
          startedAt
          __typename
        }
        children {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapistUserId
        __typename
      }
      student {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        therapists {
          nextToken
          startedAt
          __typename
        }
        parents {
          nextToken
          startedAt
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const onDeleteParentsChildren = /* GraphQL */ `
  subscription OnDeleteParentsChildren(
    $filter: ModelSubscriptionParentsChildrenFilterInput
  ) {
    onDeleteParentsChildren(filter: $filter) {
      id
      therapistId
      studentId
      therapist {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        parent
        students {
          nextToken
          startedAt
          __typename
        }
        children {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        therapistUserId
        __typename
      }
      student {
        id
        user {
          id
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTherapistId
          userStudentId
          __typename
        }
        therapists {
          nextToken
          startedAt
          __typename
        }
        parents {
          nextToken
          startedAt
          __typename
        }
        progress {
          nextToken
          startedAt
          __typename
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        studentUserId
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
