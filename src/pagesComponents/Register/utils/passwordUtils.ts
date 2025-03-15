interface PasswordStrength {
    score: number;
    color: string;
    label: string;
}

export const getPasswordStrength = (password: string): PasswordStrength => {
    let score = 0;
    if (password.length >= 8) score += 25;
    if (/[A-Z]/.test(password)) score += 25;
    if (/[0-9]/.test(password)) score += 25;
    if (/[^A-Za-z0-9]/.test(password)) score += 25;

    const getColorAndLabel = (score: number): { color: string; label: string } => {
        if (score === 0) return { color: '#ff0000', label: 'Muito fraca' };
        if (score <= 25) return { color: '#ff4444', label: 'Fraca' };
        if (score <= 50) return { color: '#ffaa00', label: 'Média' };
        if (score <= 75) return { color: '#2196f3', label: 'Forte' };
        return { color: '#00c853', label: 'Muito forte' };
    };

    const { color, label } = getColorAndLabel(score);

    return {
        score,
        color,
        label
    };
};