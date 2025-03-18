"use client";

import { Button } from '@mui/material';
import { useSession } from 'next-auth/react';
import { PageTransition } from '@/components/PageTransition';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { ProfileContainer, ProfileCard, ProfileTitle, ContactButton } from './styled';
import { UserInfo } from './components/UserInfo';
import { SubscriptionInfo } from './components/SubscriptionInfo';
import { ProfileSkeleton } from './components/ProfileSkeleton';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import Link from 'next/link';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import { useState } from 'react';
import { EditDialog } from './components/EditDialog';
import { ThemePreference } from '@/components/TrocarTema';


export const Perfil = () => {
    const { data: session, status } = useSession();
    const [editField, setEditField] = useState<string | null>(null);
    const [editValue, setEditValue] = useState("");

    const handleEdit = (field: string, value: string) => {
        setEditField(field);
        setEditValue(value || "");
    };

    const handleSave = async (value: string) => {
        // To be implemented when database is connected
        console.log(`Saving ${editField}: ${value}`);
        setEditField(null);
    };

    if (status === "loading") {
        return <ProfileSkeleton />;
    }

    return (
        <PageTransition direction="up" duration={0.4} distance={30}>
            <ErrorBoundary>
                <SuspenseWrapper fallback={<ProfileSkeleton />}>
                    <ProfileContainer>
                        <ProfileTitle>
                            Perfil
                        </ProfileTitle>

                        <ProfileCard elevation={0}>
                            <UserInfo
                                label="Nome"
                                value={session?.user?.name}
                                onEdit={() => handleEdit('name', session?.user?.name || '')}
                            />
                            <UserInfo
                                label="Email"
                                value={session?.user?.email}
                                onEdit={() => handleEdit('email', session?.user?.email || '')}
                            />
                            <UserInfo
                                label="Telefone"
                                value={null}
                                onEdit={() => handleEdit('phone', '')}
                            />
                            <ThemePreference />
                        </ProfileCard>

                        <ProfileCard elevation={0}>
                            <SubscriptionInfo />
                        </ProfileCard>

                        <ContactButton>
                            <Button
                                variant="outlined"
                                startIcon={<ContactSupportIcon />}
                                component={Link}
                                href={`/visitante/contato?name=${session?.user?.name}&email=${session?.user?.email}`}
                            >
                                Precisa de Ajuda? Entre em Contato
                            </Button>
                        </ContactButton>

                        <EditDialog
                            open={!!editField}
                            title={editField || ""}
                            value={editValue}
                            onClose={() => setEditField(null)}
                            onSave={handleSave}
                        />
                    </ProfileContainer>
                </SuspenseWrapper>
            </ErrorBoundary>
        </PageTransition>
    );
};