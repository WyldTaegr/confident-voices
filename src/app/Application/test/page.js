'use client'

import { API, Auth } from "aws-amplify";
import { getCurrentUser, signIn } from "@/util/auth";
import * as queries from "@/graphql/queries";
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api'
import { useAuthenticator } from "@aws-amplify/ui-react";

export default function TestPage() {
/**
    const { user, route, signOut } = useAuthenticator((context) => [
        context.user,
        context.route,
        context.signOut
    ])
    let userTest;
    try {
        userTest = await Auth.currentAuthenticatedUser();
    } catch (e) {
        userTest = e;
    }
    const output = userTest === null ? "NULL" : userTest.toString();
    await signIn("tst25@case.edu", "Karat3Past@");
    const users = await API.graphql({
        query: queries.getUser,

    })

    console.log("LOGGING: USERS");
    console.log(users.data.listUsers.items);
    console.log("-------")
    **/
   const output = "asdfsadf"
    return (
        <div class="text-black">
            <h1>Test output:</h1>
            <p>{output}</p>
            <h1>Function export:</h1>
            <p></p>
            <h1>Authenticator user:</h1>
            <p>{user.attributes.email}</p>
        </div>
    )
}