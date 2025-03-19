import { useState, type ChangeEvent, type FormEvent } from 'react';
import { FormData, FormErrors } from '../types';
import { validateForm } from '../utils/validation';

const MAX_ATTEMPTS = 5;

export const useRegisterForm = (onBlock: () => void) => {
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
            setRegisterAttempts(prev => {
                const newAttempts = prev + 1;
                if (newAttempts >= MAX_ATTEMPTS) {
                    onBlock();
                    return 0;
                }
                return newAttempts;
            });
        }
    };

    return {
        formData,
        errors,
        acceptedTerms,
        setAcceptedTerms,
        handleChange,
        handleSubmit
    };
};