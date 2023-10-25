import { Auth } from 'aws-amplify';


export default async function TestPage() {

    let user;
    try {
        user = await Auth.currentAuthenticatedUser();
    } catch (e) {
        user = e;
    }
    const output = user === null ? "NULL" : user.toString();
    return (
        <div class="center">
            <h1>Test output:</h1>
            <p>{output}</p>
        </div>
    )
}