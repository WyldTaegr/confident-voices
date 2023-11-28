'use client'
import { useRouter } from 'next/navigation';
import '@aws-amplify/ui-react/styles.css';
import LoginForm from '@/components/LoginForm';
import { getCurrentUser } from '@/util/auth';
import { useEffect } from 'react';

export default function LoginPage() {
    const router = useRouter();
    useEffect(() => {
        getCurrentUser().then(async (user) => {
            if (user !== null) router.push("/Application/UserProfilePage");
        })
    });
    return (
        <div className="flex justify-center">
            <LoginForm />
        </div>
    )
}
