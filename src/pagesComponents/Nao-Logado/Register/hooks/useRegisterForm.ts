import { useState, type ChangeEvent, type FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { FormData, FormErrors } from '../types';
import { validateForm } from '../utils/validation';

const MAX_ATTEMPTS = 5;

export const useRegisterForm = (onBlock: () => void) => {
    const router = useRouter();
    const [formData, setFormData] = useState<FormData>({
        name: '',
        cpf: '',
        phone: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [registerAttempts, setRegisterAttempts] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!acceptedTerms) {
            alert('Você precisa aceitar os termos e condições para continuar');
            return;
        }

        const { errors: validationErrors, isValid } = validateForm(formData, acceptedTerms);
        setErrors(validationErrors);

        if (isValid) {
            setIsSubmitting(true);
            
            try {
                // Prepare the data for the API
                const userData = {
                    name: formData.name,
                    cpf: formData.cpf.replace(/[^\d]/g, ""), // Remove non-digits
                    phone: formData.phone.replace(/[^\d]/g, ""), // Remove non-digits
                    email: formData.email,
                    password: formData.password
                };
                
                // Call the API to create a user
                const response = await fetch("https://api-servidor-yupg.onrender.com/user/create", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(userData),
                });
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || "Falha ao registrar usuário");
                }
                
                const data = await response.json();
                
                // Registration successful, redirect to login
                alert("Registro realizado com sucesso! Faça login para continuar.");
                router.push("/login");
            } catch (error) {
                console.error("Registration error:", error);
                
                // Increment attempt counter
                setRegisterAttempts(prev => {
                    const newAttempts = prev + 1;
                    if (newAttempts >= MAX_ATTEMPTS) {
                        onBlock();
                        return 0;
                    }
                    return newAttempts;
                });
                
                // Show error to user
                alert(`Erro ao registrar: ${error instanceof Error ? error.message : "Tente novamente mais tarde"}`);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    return {
        formData,
        errors,
        acceptedTerms,
        isSubmitting,
        setAcceptedTerms,
        handleChange,
        handleSubmit
    };
};