"use client";

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { Button, Snackbar, Alert } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

import { PageTransition } from '@/components/PageTransition';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { SuspenseWrapper } from '@/components/SuspenseWrapper';
import { SubscriptionInfo } from './components/SubscriptionInfo';
import { ProfileSkeleton } from './components/ProfileSkeleton';
import { AdditionalInfo } from './components/AdditionalInfo';
import { BasicInfo } from './components/BasicInfo';
import { useProfileData } from './hooks/useProfileData';
import { useProfileActions } from './hooks/useProfileActions';

import {
    ProfileContainer,
    ProfileCard,
    ProfileTitle,
    ContactButton,
    StyledContactButton
} from './styled';

export const Perfil = () => {
    const { data: session, status } = useSession();
    
    // Use custom hooks to manage state and actions
    const {
        userData,
        setUserData,
        isLoading,
        notification,
        setNotification,
        displayValues,
        displayCreatedAt,
        displayUpdatedAt,
        isActiveUser,
        handleCloseNotification
    } = useProfileData(session);

    const {
        editField,
        editValue,
        isSaving,
        showPasswordDialog,
        passwordError,
        setEditField,
        setShowPasswordDialog,
        setPasswordError,
        handleEdit,
        handleSave,
        handlePasswordChange
    } = useProfileActions(session, userData, setUserData, setNotification, displayValues);

    // Destructure display values for easier access
    const { name: displayName, email: displayEmail, phone: displayPhone, cpf: displayCpf } = displayValues;

    if (status === "loading" || isLoading) {
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
                            <BasicInfo
                                displayName={displayName}
                                displayEmail={displayEmail}
                                displayPhone={displayPhone}
                                displayCpf={displayCpf}
                                handleEdit={handleEdit}
                                showPasswordDialog={showPasswordDialog}
                                setShowPasswordDialog={setShowPasswordDialog}
                                setPasswordError={setPasswordError}
                                handlePasswordChange={handlePasswordChange}
                                isSaving={isSaving}
                                editField={editField}
                                editValue={editValue}
                                setEditField={setEditField}
                                handleSave={handleSave}
                            />
                        </ProfileCard>

                        <ProfileCard>
                            <AdditionalInfo
                                displayCreatedAt={displayCreatedAt}
                                displayUpdatedAt={displayUpdatedAt}
                                isActiveUser={isActiveUser}
                                userData={userData}
                                handleEdit={handleEdit}
                            />
                        </ProfileCard>

                        <ProfileCard elevation={0}>
                            <SubscriptionInfo />
                        </ProfileCard>

                        <ProfileCard elevation={0} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button
                                variant="text"
                                color="error"
                                endIcon={<LogoutIcon />}
                                onClick={() => signOut({ callbackUrl: '/' })}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 0.5
                                }}
                            >
                                Fazer logout
                            </Button>
                        </ProfileCard>

                        <ContactButton>
                            <StyledContactButton
                                variant="contained"
                                startIcon={<ContactSupportIcon />}
                                component={Link}
                                href={`/visitante/contato?name=${displayName}&email=${displayEmail}`}
                            >
                                Precisa de Ajuda? Entre em Contato
                            </StyledContactButton>
                        </ContactButton>

                        <Snackbar
                            open={notification.open}
                            autoHideDuration={6000}
                            onClose={handleCloseNotification}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                        >
                            <Alert
                                onClose={handleCloseNotification}
                                severity={notification.type}
                                sx={{ width: '100%' }}
                            >
                                {notification.message}
                            </Alert>
                        </Snackbar>
                    </ProfileContainer>
                </SuspenseWrapper>
            </ErrorBoundary>
        </PageTransition>
    );
};