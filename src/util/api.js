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

export async function createExerciseProgress({studentID}){
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