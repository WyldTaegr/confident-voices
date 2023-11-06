import { API } from "aws-amplify"
import awsExports from '@/aws-exports';
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/api";
import * as mutations from '@/graphql/mutations'
import * as queries from '@/graphql/queries';

API.configure(awsExports)

export async function createUser(email, mode) {
    console.log(email);
    const users = await API.graphql({
        query: queries.listUsers,
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
    })
    console.log(users);
    console.log(users.data.listUsers.items.values());
    const userDetails = {
        id: email,
        active: mode === "student" ? "Student" : "Therapist",
    }

    for (const user of users.data.listUsers.items) {
        console.log(user);
        console.log(user.id);
        const deleteUser = await API.graphql({
            query: mutations.deleteUser,
            variables: { input: {id: user.id} },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS
        });
        console.log("DELETE:\n", deleteUser)
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