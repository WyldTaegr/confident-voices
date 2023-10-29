import { Auth } from "aws-amplify";
import { getCurrentUser, signIn } from "@/util/auth";

export default async function TestPage() {
    
    let user;
    try {
        user = await Auth.currentAuthenticatedUser();
    } catch (e) {
        user = e;
    }
    const output = user === null ? "NULL" : user.toString();
    await signIn("username", "password");
    const func = Object.values(await getCurrentUser()).toString();
    return (
        <div class="text-black">
            <h1>Test output:</h1>
            <p>{output}</p>
            <h1>Function export:</h1>
            <p>{func}</p>
        </div>
    )
}