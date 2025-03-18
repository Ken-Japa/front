import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { DateProvider } from '@/providers/DateProvider';

export default async function AuthLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await getServerSession();

    if (!session) {
        redirect('/login');
    }

    return (
        <DateProvider>
            <main className="pt-16">
                {children}
            </main>
        </DateProvider>
    );
}