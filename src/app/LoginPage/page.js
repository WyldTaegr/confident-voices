'use client'
import { useRouter } from 'next/navigation';
import '@aws-amplify/ui-react/styles.css';
import LoginForm from '@/components/LoginForm';
import { getCurrentUser } from '@/util/auth';

export default function LoginPage() {
    const router = useRouter();
    getCurrentUser().then((user) => {
        if (user !== null) router.push("/Application");
    })

    return (
        <div className="flex justify-center">
            <LoginForm />
        </div>
    )
}
