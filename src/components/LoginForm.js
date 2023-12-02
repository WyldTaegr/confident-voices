"use client"

import { Card, Label, Input, TabItem, Tabs, Flex, Button, PasswordField, SelectField, Alert } from "@aws-amplify/ui-react";
import { useState } from "react";
import '@aws-amplify/ui-react/styles.css';
import { confirmEmail, getCurrentUser, signIn, signOut, signUp } from "@/util/auth";
import { useRouter } from "next/navigation";

export default function LoginForm() {
    const [inputs, setInputs] = useState({});
    const [verifyMode, setVerifyMode] = useState(false);
    const [userID, setUserID] = useState("");
    const [currentUser, setCurrentUser] = useState("");

    const router = useRouter();

    const updateUser = async () => {
        const user = await getCurrentUser();
        console.log(user);
        setCurrentUser(() => user === null ? "NULL" : user.attributes.email);
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    
    const handleLogin = async (e) => {
        e.preventDefault();
        console.log("Login hit");
        const data = new FormData(e.target);
        await signIn(data.get("email"), data.get("password"));
        router.push("/Application/UserProfilePage");
    }
    
    const handleSignUp = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        await signUp(data.get("email"), data.get("password"), data.get("first-name"), data.get("last-name"));
        setInputs(values => ({...values, ["role"]: data.get("role")}));

        setVerifyMode(() => true);
    }

    const handleVerify = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        await confirmEmail(inputs["email"], inputs["password"], data.get("code"), inputs["role"])

        router.push("/Application/UserProfilePage");
    }

    const forceLogOut = async (e) => {
        await signOut();
        await updateUser();
    }

    return (
        <Card maxWidth="600px" minWidth="300px" width="30vw" className="content-center">
            <Tabs justifyContent="center">
                <TabItem title="Log In">
                    <form onSubmit={handleLogin}>
                        <Flex direction="column" gap="medium">
                            <Flex direction="column" gap="small">
                                <Label htmlFor="email">Email</Label>
                                <Input id="loginEmail" name="email" type="email" isRequired={true} onChange={handleChange} />
                            </Flex>
                            <Flex direction="column" gap="small">
                                <Label htmlFor="password">Password</Label>
                                <PasswordField name="password" size="small" isRequired={true} onChange={handleChange} />
                            </Flex>
                            <Button type="submit">Log In</Button>
                        </Flex>
                    </form>
                </TabItem>
                <TabItem title="Create Account">
                    <form onSubmit={handleSignUp} className={verifyMode ? "hidden" : ""}>
                        <Flex direction="column" gap="medium">
                            <Flex direction="column" gap="small">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" name="email" type="email" isRequired={true} onChange={handleChange} />
                            </Flex>
                            <Flex direction="column" gap="small">
                                <Label htmlFor="password">Password</Label>
                                <PasswordField name="password" size="small" isRequired={true} onChange={handleChange} />
                                <Label htmlFor="confirm-password">Confirm Password</Label>
                                <PasswordField name="confirm-password" size="small" isRequired={true} onChange={handleChange} />
                            </Flex>
                            <Flex direction="column" gap="small">
                                <Label htmlFor="first-name">First Name</Label>
                                <Input id="first-name" name="first-name" isRequired={true} onChange={handleChange} />
                            </Flex>
                            <Flex direction="column" gap="small">
                                <Label htmlFor="last-name">Last Name</Label>
                                <Input id="last-name" name="last-name" isRequired={true} onChange={handleChange} />
                            </Flex>
                            <SelectField label="Role" name="role" descriptiveText="Sign up as:" onChange={handleChange} >
                                <option value="student">Student</option>
                                <option value="parent">Parent</option>
                                <option value="therapist">Speech Therapist</option>
                            </SelectField>
                            <Button type="submit">Sign Up</Button>
                        </Flex>
                    </form>
                    <form onSubmit={handleVerify} className={verifyMode ? "" : "hidden"}>
                        <Flex direction="column" gap="medium">
                            <Flex direction="column" gap="small">
                                <Label htmlFor="code">Verification Code</Label>
                                <Input id="code" name="code" type="number" isRequired={true} onChange={handleChange} />
                            </Flex>
                            <Button type="submit">Create Account</Button>
                        </Flex>
                    </form>
                </TabItem>
            </Tabs>
            <Alert isDismissible={false} hasIcon={true} heading="Login State">
                <Flex direction="column" gap="medium">
                    {currentUser}
                    <Button onClick={updateUser}>Update user info</Button>
                    <Button onClick={forceLogOut}>Log Out</Button>
                </Flex>
            </Alert>
        </Card>
    )
}