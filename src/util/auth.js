import { API, Amplify, Auth } from "aws-amplify";
import * as mutations from "@/graphql/mutations";
import awsExports from '@/aws-exports';
import { createStudent, createTherapist, createUser } from "./api";
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

export async function signUp(email, password, name, familyName, mode) {
    let progress = 0
    try {
        // Create the Cognito user
        const { userAuth } = await Auth.signUp({
            username: email,
            password: password,
            attributes: {
                email: email,
                name: name,
                family_name: familyName
            },
            autoSignIn: {
                enabled: true
            }
        });
        progress += 1;

        await Auth.confirmSignUp(email, "hmm");

        await Auth.signIn(email, password);
        const userApi = await createUser(email, mode);
        progress += 1;
        // Create the Student/Therapist object in the GraphQL database
        const userDetails = { id: email };
        switch(mode) {
            case "student":
                const newStudent = await createStudent(userApi);
                userDetails["student"] = newStudent;
                break;
            case "parent":
            case "therapist":
                const newTherapist = await createTherapist(userApi, mode === "parent");
                userDetails["therapist"] = newTherapist;

                break;
            default:
                console.error("unrecognized account type:", mode);
        }
        progress += 1;
        // Link the GraphQL user to the GraphQL Student/Therapist objects
        const updatedUser = await API.graphql({
            query: mutations.updateUser,
            variables: { input: userDetails }
        });

        progress += 1;
        return updatedUser


    } catch (e) {
        console.log(`error signing up: reached ${progress}\n`, e);
    }
}