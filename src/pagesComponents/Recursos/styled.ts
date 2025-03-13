import styled from "@emotion/styled";

export const SectionSolutions = styled.section`
    background: linear-gradient(180deg, #000000 0%, #001529 100%);
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: radial-gradient(circle at center, rgba(13, 149, 249, 0.1) 0%, transparent 70%);
        pointer-events: none;
    }
`;

export const FeatureCard = styled.div`
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
    cursor: pointer;
    overflow: hidden;
    position: relative;

    &:hover {
        background: rgba(255, 255, 255, 0.05);
        border-color: rgba(13, 149, 249, 0.3);
        box-shadow: 0 8px 32px rgba(13, 149, 249, 0.1);
    }

    .icon-container {
        background: rgba(13, 149, 249, 0.1);
        width: 64px;
        height: 64px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-5px);
        }
    }

    .feature-title {
        color: #ffffff;
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 0.75rem;
    }

    .feature-description {
        color: rgba(255, 255, 255, 0.7);
        font-size: 1rem;
        line-height: 1.6;
        flex-grow: 1;
    }

    ul {
        margin-top: auto;
        padding: 0;
        list-style: none;
        
        li {
            position: relative;
            padding-left: 1rem;
            margin-bottom: 0.5rem;
            opacity: 0;
            transform: translateY(10px);
            animation: slideIn 0.3s ease forwards;

            &:nth-of-type(1) { animation-delay: 0.1s; }
            &:nth-of-type(2) { animation-delay: 0.2s; }
            &:nth-of-type(3) { animation-delay: 0.3s; }
        }
    }

    @keyframes slideIn {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    @media (max-width: 768px) {
        padding: 1.5rem;
        
        .icon-container {
            width: 48px;
            height: 48px;
            
            svg {
                font-size: 24px;
            }
        }

        .feature-title {
            font-size: 1.1rem;
        }

        .feature-description {
            font-size: 0.9rem;
        }
    }
`;