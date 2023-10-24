/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      owner
      picture {
        bucket
        region
        key
        id
        createdAt
        updatedAt
        questionProgressSubmissionsId
        __typename
      }
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
      userPictureId
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
        owner
        active
        createdAt
        updatedAt
        userPictureId
        userTherapistId
        userStudentId
        __typename
      }
      nextToken
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
        owner
        active
        createdAt
        updatedAt
        userPictureId
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
        createdAt
        updatedAt
        therapistUserId
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
      user {
        id
        owner
        active
        createdAt
        updatedAt
        userPictureId
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
export const listStudents = /* GraphQL */ `
  query ListStudents(
    $filter: ModelStudentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        studentUserId
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
      description
      example {
        bucket
        region
        key
        id
        createdAt
        updatedAt
        questionProgressSubmissionsId
        __typename
      }
      createdAt
      updatedAt
      exerciseQuestionsId
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
        createdAt
        updatedAt
        exerciseQuestionsId
        questionExampleId
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
        createdAt
        updatedAt
        studentUserId
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
        createdAt
        updatedAt
        studentProgressId
        __typename
      }
      question {
        id
        description
        createdAt
        updatedAt
        exerciseQuestionsId
        questionExampleId
        __typename
      }
      completed
      submissions {
        nextToken
        __typename
      }
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
export const getS3Object = /* GraphQL */ `
  query GetS3Object($id: ID!) {
    getS3Object(id: $id) {
      bucket
      region
      key
      id
      createdAt
      updatedAt
      questionProgressSubmissionsId
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
        bucket
        region
        key
        id
        createdAt
        updatedAt
        questionProgressSubmissionsId
        __typename
      }
      nextToken
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
        __typename
      }
      nextToken
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
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
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
