import { type FormData } from '../types';

export const submitContactForm = async (formData: FormData): Promise<void> => {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Failed to submit contact form');
        }
    } catch (error) {
        throw new Error('Network error while submitting form');
    }
};