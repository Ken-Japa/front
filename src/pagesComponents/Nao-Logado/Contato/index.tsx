"use client";

import { useState, lazy, type FormEvent, Suspense } from "react";
import { useSearchParams } from 'next/navigation';

// Componentes
import { OptimizedImage } from "@/components/OptimizedImage";
import { PageTransition } from "@/components/PageTransition";
import { ErrorBoundary } from '@/components/ErrorBoundary';

// Estilos e constantes
import { SectionContact } from "./styled";
import { CONTACT_CONSTANTS } from './constants';

// Hooks e serviços
import { useContactForm } from "./hooks/useContactForm";
import { useBlockTimer } from "./hooks/useBlockTimer";
import { useSnackbar } from "./hooks/useSnackbar";
import { submitContactForm } from './services/contactService';

// Componentes locais
import { ContactContent } from './components/ContactContent';
import { SnackbarNotification } from './components/SnackbarNotification';

// Lazy loading de componentes
const Header = lazy(() => import('./components/Header').then(mod => ({ default: mod.Header })));
const ContactInfo = lazy(() => import('./components/ContactInfo').then(mod => ({ default: mod.ContactInfo })));
const ContactFormComponent = lazy(() => import('./components/ContactForm').then(mod => ({ default: mod.ContactFormComponent })));
const ContactFormSkeleton = lazy(() => import('./components/ContactForm/ContactFormSkeleton').then(mod => ({ default: mod.ContactFormSkeleton })));

const ContactWithSearchParams = () => {
    const searchParams = useSearchParams();
    const [imageLoaded, setImageLoaded] = useState(false);

    const { isBlocked, blockTimer, handleBlock } = useBlockTimer(CONTACT_CONSTANTS.BLOCK_DURATION, 'contactBlockedUntil');
    const { formData, errors, handleChange, validateForm } = useContactForm(searchParams);
    const { snackbar, showSnackbar } = useSnackbar();
    const [contactAttempts, setContactAttempts] = useState(0);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (isBlocked) {
            showSnackbar(CONTACT_CONSTANTS.MESSAGES.WAIT_BLOCK(blockTimer), 'error');
            return;
        }

        if (!validateForm()) return;

        setContactAttempts(prev => {
            const newAttempts = prev + 1;
            if (newAttempts >= CONTACT_CONSTANTS.MAX_ATTEMPTS) {
                handleBlock();
                return 0;
            }
            return newAttempts;
        });

        try {
            await submitContactForm(formData);
            showSnackbar(CONTACT_CONSTANTS.MESSAGES.SUCCESS, 'success');
        } catch (error) {
            showSnackbar(CONTACT_CONSTANTS.MESSAGES.ERROR, 'error');
        }
    };

    const imageProps = {
        src: "/assets/images/background/Contato.jpg",
        alt: "Imagem de Fundo de Contato",
        fill: true,
        priority: true,
        className: "object-cover",
        sizes: "100vw",
        onLoad: () => setImageLoaded(true),
        style: {
            filter: !imageLoaded ? 'grayscale(1)' : 'none',
            transition: 'filter 0.5s ease-in-out'
        }
    };

    return (
        <PageTransition direction="up" duration={0.4} distance={30} className="w-full">
            <ErrorBoundary>
                <SectionContact>
                    <div className="background-image">
                        <OptimizedImage {...imageProps} />
                    </div>
                    <div className="content-wrapper">
                        <ContactContent
                            imageLoaded={imageLoaded}
                            formData={formData}
                            errors={errors}
                            isBlocked={isBlocked}
                            blockTimer={blockTimer}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            Header={Header}
                            ContactInfo={ContactInfo}
                            ContactFormComponent={ContactFormComponent}
                            ContactFormSkeleton={ContactFormSkeleton}
                        />
                        <SnackbarNotification
                            open={snackbar.open}
                            message={snackbar.message}
                            severity={snackbar.severity}
                            onClose={() => showSnackbar('', 'success', false)}
                        />
                    </div>
                </SectionContact>
            </ErrorBoundary>
        </PageTransition>
    );
};

// Componente principal com Suspense
export const Contact = () => {
    return (
        <Suspense fallback={<div>Carregando...</div>}>
            <ContactWithSearchParams />
        </Suspense>
    );
};