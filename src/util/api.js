import { API } from "aws-amplify"
import awsExports from '@/aws-exports';
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as mutations from '@/graphql/mutations'
import * as queries from '@/graphql/queries';

API.configure(awsExports)

export async function createUser(email, mode) {
    const userDetails = {
        id: email,
        active: mode === "student" ? "Student" : "Therapist",
    }

    const newUser = await API.graphql({
        query: mutations.createUser,
        variables: { input: userDetails },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });
    
    return newUser;
}

export async function createTherapist(userId, parent) {
    const therapistDetails = {
        id: userId,
        therapistUserId: userId,
        parent: parent
    }

    const newTherapist = await API.graphql({
        query: mutations.createTherapist,
        variables: { input: therapistDetails },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    return newTherapist;
}

export async function createStudent(userId) {
    const studentDetails = {
        id: userId,
        studentUserId: userId
    }

    const newStudent = await API.graphql({
        query: mutations.createStudent,
        variables: { input: studentDetails },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })

    return newStudent;
}

export async function getStudent(studentID){
    const studentDetails = {
        studentID: studentID
    }

    const student = await API.graphql({
        query: queries.getStudent,
        variables: {input: studentDetails},
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });
    return student.data.getStudent;
}

export async function createExerciseProgress(studentID){
    const exerciseProgressParams = {
        studentID: studentID
    };

    const newExerciseProgress = await API.graphql({
        query: mutations.createExerciseProgress,
        variables:{input: exerciseProgressParams},
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    return newExerciseProgress;
}

export async function createS3Object(name){
    const s3ObjectData = {
    name: name,
    key: name, // or any other unique identifier you'd like to use
    // You need to determine how to get this ID
  };
  await API.graphql({
    query: mutations.createS3Object,
    variables:{input: s3ObjectData},
    authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
  });
}

export async function listUsers() {
    const result = await API.graphql({
        query: queries.listUsers,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    return result.data.listUsers.items
}

export async function listStudents() {
    const result = await API.graphql({
        query: queries.listStudents,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })

    return result.data.listStudents.items
}

export async function connectStudentToTherapist(studentId, therapistId) {
    const connectionDetails = {
        studentId: studentId,
        therapistId: therapistId
    }
    try {
        const result = await API.graphql({
            query: mutations.createTherapistsStudents,
              variables: {input: connectionDetails},
              authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        })
    } catch (e) {
        console.error("Error connecting student to therapist:", e)
    }
}

export async function getStudentsByTherapist(therapistId) {
    const connectionDetails = {
        filter: {
            therapistId: {
                eq: therapistId
            }
        }
    }

    const result = await API.graphql({
        query: queries.listTherapistsStudents,
        variables: connectionDetails,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })

    return result.data.listTherapistsStudents.items;
}

export async function listExerciseProgressByStudent(studentId) {
    const result = await API.graphql({
        query: queries.listExerciseProgresses,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    });

    const exercises = result.data.listExerciseProgresses.items.filter(
        (exercise) => exercise.studentID === studentId
    )
    console.log(exercises);
    return exercises;
}