import { Amplify, Auth } from "aws-amplify";

import awsExports from '@/aws-exports';
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