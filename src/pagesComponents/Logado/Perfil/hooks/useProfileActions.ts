import { useState, useCallback } from 'react';
import { Session } from 'next-auth';
import { UserProfile } from '../types';
import { ProfileService } from '../services/api';

export const useProfileActions = (
    session: Session | null,
    userData: UserProfile | null,
    setUserData: React.Dispatch<React.SetStateAction<UserProfile | null>>,
    setNotification: (notification: { open: boolean; message: string; type: 'success' | 'error' }) => void,
    displayValues: { name: string; email: string; phone: string | null; cpf: string | null }
) => {
    const [editField, setEditField] = useState<string | null>(null);
    const [editValue, setEditValue] = useState("");
    const [isSaving, setIsSaving] = useState(false);
    const [showPasswordDialog, setShowPasswordDialog] = useState(false);
    const [passwordError, setPasswordError] = useState("");

    const handleEdit = useCallback((field: string, value: string) => {
        setEditField(field);
        setEditValue(value || "");
    }, []);

    const handleSave = useCallback(async (value: string) => {
        if (!editField || !session?.user?.email) return;

        setIsSaving(true);
        try {
            const userId = localStorage.getItem("userId") || session.user.email;

            if (editField === 'defaultDashboard' || editField === 'defaultPositionType') {
                await ProfileService.updateUserProfile(userId, {
                    preferences: {
                        ...(userData?.preferences || {}),
                        [editField]: value
                    }
                } as Partial<UserProfile>);
            } else {
                await ProfileService.updateUserProfile(userId, {
                    [editField]: value
                } as Partial<UserProfile>);
            }

            setUserData((prev: UserProfile | null) => {
                if (!prev) return {
                    id: userId,
                    name: editField === 'name' ? value : displayValues.name,
                    email: editField === 'email' ? value : displayValues.email,
                    phone: editField === 'phone' ? value : displayValues.phone,
                    preferences: {
                        theme: localStorage.getItem('theme') as 'light' | 'dark' || 'dark',
                        notifications: false
                    }
                };

                if (editField === 'defaultDashboard' || editField === 'defaultPositionType') {
                    return {
                        ...prev,
                        preferences: {
                            ...prev.preferences,
                            [editField]: value
                        }
                    };
                }

                return {
                    ...prev,
                    [editField]: value
                };
            });

            setNotification({
                open: true,
                message: 'Perfil atualizado com sucesso',
                type: 'success'
            });
        } catch (error: any) {
            console.error("Error updating profile:", error);

            let errorMessage = 'Erro ao atualizar perfil';

            if (error.message) {
                if (error.message.includes('validation')) {
                    errorMessage = 'Dados inválidos. Verifique as informações fornecidas.';
                } else if (error.message.includes('unauthorized')) {
                    errorMessage = 'Sessão expirada. Faça login novamente.';
                } else if (error.message.includes('network')) {
                    errorMessage = 'Erro de conexão. Verifique sua internet.';
                }
            }

            setNotification({
                open: true,
                message: errorMessage,
                type: 'error'
            });
        } finally {
            setIsSaving(false);
            setEditField(null);
        }
    }, [editField, session, userData, displayValues, setUserData, setNotification]);

    const handlePasswordChange = useCallback(async (oldPassword: string, newPassword: string) => {
        if (!session?.user?.email) return;

        setIsSaving(true);
        try {
            const userId = localStorage.getItem("userId") || session.user.email;
            await ProfileService.updatePassword(userId, oldPassword, newPassword);
            setShowPasswordDialog(false);
            setNotification({
                open: true,
                message: 'Senha alterada com sucesso',
                type: 'success'
            });
        } catch (error: any) {
            console.error("Error updating password:", error);

            let passwordErrorMsg = "Senha atual incorreta ou nova senha inválida";

            if (error.message) {
                if (error.message.includes('incorrect')) {
                    passwordErrorMsg = "Senha atual incorreta";
                } else if (error.message.includes('requirements')) {
                    passwordErrorMsg = "Nova senha não atende aos requisitos de segurança";
                } else if (error.message.includes('match')) {
                    passwordErrorMsg = "As senhas não coincidem";
                }
            }

            setPasswordError(passwordErrorMsg);
        } finally {
            setIsSaving(false);
        }
    }, [session, setNotification]);

    return {
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
    };
};