import { API } from "aws-amplify"
import awsExports from '@/aws-exports';
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as mutations from '@/graphql/mutations'

API.configure(awsExports)

export async function createUser(email, mode) {
    const userDetails = {
        id: email,
        active: mode === "student" ? "Student" : "Therapist"
    }
    
    const newUser = await API.graphql({
        query: mutations.createUser,
        variables: { input: userDetails },
    });
    
    return newUser;
}

export async function createTherapist(user, parent) {
    const therapistDetails = {
        user: user
    }

    const newTherapist = await API.graphql({
        query: mutations.createTherapist,
        variables: { input: therapistDetails }
    });

    return newTherapist;
}

export async function createStudent(user) {
    const studentDetails = {
        user: user
    }

    const newStudent = await API.graphql({
        query: mutations.createStudent,
        variables: { input: studentDetails }
    })

    return newStudent;
}