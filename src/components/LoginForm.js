"use client"

import { Card, Label, Input, TabItem, Tabs, Flex, Button, PasswordField, SelectField } from "@aws-amplify/ui-react";
import { useState } from "react";
import '@aws-amplify/ui-react/styles.css';
import { signUp } from "@/util/auth";
import { redirect } from "next/navigation";

export default function LoginForm() {
    const [inputs, setInputs] = useState({});

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    
    const signIn = async (e) => {
        e.preventDefault();
    }
    
    const handleSignUp = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        const user = await signUp(data.get("email"), data.get("password"), data.get("first-name"), data.get("last-name"), data.get("role"));
        //redirect("/Application");
    }

    return (
        <Card maxWidth="600px" alignSelf="center">
            <Tabs justifyContent="flex-start">
                <TabItem title="Log In">
                    TODO: Login
                </TabItem>
                <TabItem title="Create Account">
                    <form onSubmit={handleSignUp}>
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
                            <Button type="submit">Create Account</Button>
                        </Flex>
                    </form>
                </TabItem>
            </Tabs>
        </Card>
    )
}