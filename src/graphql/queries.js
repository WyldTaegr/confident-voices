/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTherapist = /* GraphQL */ `
  query GetTherapist($id: ID!) {
    getTherapist(id: $id) {
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
export const listTherapists = /* GraphQL */ `
  query ListTherapists(
    $filter: ModelTherapistFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTherapists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTherapists = /* GraphQL */ `
  query SyncTherapists(
    $filter: ModelTherapistFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTherapists(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getStudent = /* GraphQL */ `
  query GetStudent($id: ID!) {
    getStudent(id: $id) {
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncStudents = /* GraphQL */ `
  query SyncStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getExercise = /* GraphQL */ `
  query GetExercise($id: ID!) {
    getExercise(id: $id) {
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
export const listExercises = /* GraphQL */ `
  query ListExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listExercises(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        questions {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncExercises = /* GraphQL */ `
  query SyncExercises(
    $filter: ModelExerciseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExercises(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        questions {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncQuestions = /* GraphQL */ `
  query SyncQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const questionsByExerciseID = /* GraphQL */ `
  query QuestionsByExerciseID(
    $exerciseID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionsByExerciseID(
      exerciseID: $exerciseID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncExerciseProgresses = /* GraphQL */ `
  query SyncExerciseProgresses(
    $filter: ModelExerciseProgressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncExerciseProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const exerciseProgressesByStudentID = /* GraphQL */ `
  query ExerciseProgressesByStudentID(
    $studentID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelExerciseProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    exerciseProgressesByStudentID(
      studentID: $studentID
      sortDirection: $sortDirection
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
      nextToken
      startedAt
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncQuestionProgresses = /* GraphQL */ `
  query SyncQuestionProgresses(
    $filter: ModelQuestionProgressFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuestionProgresses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        exerciseProgress {
          id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const questionProgressesByExerciseprogressID = /* GraphQL */ `
  query QuestionProgressesByExerciseprogressID(
    $exerciseprogressID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    questionProgressesByExerciseprogressID(
      exerciseprogressID: $exerciseprogressID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        exerciseProgress {
          id
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getS3Object = /* GraphQL */ `
  query GetS3Object($id: ID!) {
    getS3Object(id: $id) {
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
export const listS3Objects = /* GraphQL */ `
  query ListS3Objects(
    $filter: ModelS3ObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listS3Objects(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const syncS3Objects = /* GraphQL */ `
  query SyncS3Objects(
    $filter: ModelS3ObjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncS3Objects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
  }
`;
export const s3ObjectsByQuestionprogressID = /* GraphQL */ `
  query S3ObjectsByQuestionprogressID(
    $questionprogressID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelS3ObjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    s3ObjectsByQuestionprogressID(
      questionprogressID: $questionprogressID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getPostInfo = /* GraphQL */ `
  query GetPostInfo($id: ID!) {
    getPostInfo(id: $id) {
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
export const listPostInfos = /* GraphQL */ `
  query ListPostInfos(
    $filter: ModelPostInfoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPostInfos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncPostInfos = /* GraphQL */ `
  query SyncPostInfos(
    $filter: ModelPostInfoFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPostInfos(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getTherapistsStudents = /* GraphQL */ `
  query GetTherapistsStudents($id: ID!) {
    getTherapistsStudents(id: $id) {
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
export const listTherapistsStudents = /* GraphQL */ `
  query ListTherapistsStudents(
    $filter: ModelTherapistsStudentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTherapistsStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        therapistId
        studentId
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
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncTherapistsStudents = /* GraphQL */ `
  query SyncTherapistsStudents(
    $filter: ModelTherapistsStudentsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTherapistsStudents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        therapistId
        studentId
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
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const therapistsStudentsByTherapistId = /* GraphQL */ `
  query TherapistsStudentsByTherapistId(
    $therapistId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTherapistsStudentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    therapistsStudentsByTherapistId(
      therapistId: $therapistId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        therapistId
        studentId
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
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const therapistsStudentsByStudentId = /* GraphQL */ `
  query TherapistsStudentsByStudentId(
    $studentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTherapistsStudentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    therapistsStudentsByStudentId(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        therapistId
        studentId
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
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getParentsChildren = /* GraphQL */ `
  query GetParentsChildren($id: ID!) {
    getParentsChildren(id: $id) {
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
export const listParentsChildren = /* GraphQL */ `
  query ListParentsChildren(
    $filter: ModelParentsChildrenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParentsChildren(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        therapistId
        studentId
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
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncParentsChildren = /* GraphQL */ `
  query SyncParentsChildren(
    $filter: ModelParentsChildrenFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncParentsChildren(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        therapistId
        studentId
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
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const parentsChildrenByTherapistId = /* GraphQL */ `
  query ParentsChildrenByTherapistId(
    $therapistId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelParentsChildrenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    parentsChildrenByTherapistId(
      therapistId: $therapistId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        therapistId
        studentId
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
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const parentsChildrenByStudentId = /* GraphQL */ `
  query ParentsChildrenByStudentId(
    $studentId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelParentsChildrenFilterInput
    $limit: Int
    $nextToken: String
  ) {
    parentsChildrenByStudentId(
      studentId: $studentId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        therapistId
        studentId
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
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
