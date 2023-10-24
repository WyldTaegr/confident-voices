import { Auth } from 'aws-amplify';


export default async function TestPage() {

    const user = await Auth.currentAuthenticatedUser();
    const output = user === null ? "NULL" : user.toString();
    return (
        <div class="center">
            <h1>Test output:</h1>
            <p>{output}</p>
        </div>
    )
}