'use client'
import { Amplify, Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { useAuthenticator, useTheme } from '@aws-amplify/ui-react';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { View, Image, Text, Heading, Button, SelectField, CheckboxField } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '@/aws-exports';
Amplify.configure(awsExports);
import '@aws-amplify/ui-react/styles.css';

export default function LoginPage() {
  const [authState, setAuthState] = useState();
  const router = useRouter();

  useEffect(() => {
    if (authState === 'signedIn') {
      router.push('/');
    }
  }, [authState, router]);
  return (
    <Authenticator
      // Default to Sign Up screen
      initialState="signUp"
      /*TO-DO: set up role based access views*/
      onStateChange={(authState) => setAuthState(authState)}
      // Customize `Authenticator.SignUp.FormFields`
      components={{
        SignUp: {
          FormFields() {
            const { validationErrors } = useAuthenticator();

            return (
              <>
                {/* Re-use default `Authenticator.SignUp.FormFields` */}
                <Authenticator.SignUp.FormFields />

                {/* Append & require Terms & Conditions field to sign up  */}
                <SelectField
                  label="Role"
                  descriptiveText="Sign up as:"
                >
                  <option value="student">Student</option>
                  <option value="parent">Parent</option>
                  <option value="speech_therapist">Speech Therapist</option>
                </SelectField>
              </>
            );
          },
        },
      }}
      services={{
      }}
    >
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
          <p>{authState}</p>
        </main>
      )}
    </Authenticator>
  );
}
