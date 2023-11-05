import { API, Amplify, Auth, DataStore } from "aws-amplify";
import * as mutations from "@/graphql/mutations";
import awsExports from '@/aws-exports';
import { createStudent, createTherapist, createUser } from "./api";
import { User } from "@/models";
Amplify.configure(awsExports);

export async function getCurrentUser() {
    try {
        const user = await Auth.currentUserInfo();
        return user;

    } catch(e) {
        return e.toString();
    }
}
//45b4a95a-3b9b-497f-b9b3-f7e73e8338f4
export async function signIn(email, password) {
    await Auth.signIn(email, password);
}

export async function signOut() {
    await Auth.signOut();
}

export async function signUp(email, password, name, familyName) {
    let progress = 0
    try {
        // Create the Cognito user
        const { userAuth } = await Auth.signUp({
            username: email,
            password: password,
            attributes: {
                name: name,
                family_name: familyName
            },
            autoSignIn: {
                enabled: true
            }
        });
        progress += 1;


    } catch (e) {
        console.log(`error signing up: reached ${progress}\n`, e);
    }
}

export async function confirmEmail(email, password, code, mode) {
    let progress = 0;
    try {
        await Auth.confirmSignUp(email, code);
        await Auth.signIn(email, password);
        const result = await createUser(email, mode);
        const userId = result.data.createUser.id;
        console.log(userId);
        progress += 1;
        // Create the Student/Therapist object in the GraphQL database
        const newStudent = await createStudent(userId);
        const newTherapist = await createTherapist(userId, mode === "parent");
        progress += 1;
        console.log("Confirm sucess!")
        return true;


    } catch (e) {
        console.log(`error confirming email: reached ${progress}\n`, e);
    }
}