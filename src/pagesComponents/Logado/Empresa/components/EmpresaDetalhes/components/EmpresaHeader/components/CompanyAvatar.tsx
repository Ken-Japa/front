import React, { useState, useEffect } from 'react';
import { Avatar } from '@mui/material';
import { getBestCompanyLogoPath } from '../utils/imageUtils';

interface CompanyAvatarProps {
  companyName: string;
  size?: number;
  showFallback?: boolean;
}

export const CompanyAvatar: React.FC<CompanyAvatarProps> = ({ 
  companyName, 
  size = 60,
  showFallback = true
}) => {
  const [imagePath, setImagePath] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    
    const loadImage = async () => {
      try {
        const bestPath = await getBestCompanyLogoPath(companyName);
        if (isMounted) {
          setImagePath(bestPath);
          setLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          setImagePath("");
          setLoading(false);
        }
      }
    };
    
    loadImage();
    
    return () => {
      isMounted = false;
    };
  }, [companyName]);

  return (
    <Avatar
      src={loading ? undefined : imagePath}
      alt={`${companyName} logo`}
      sx={{
        width: size,
        height: size,
        bgcolor: '#1a2234', // Dark background for fallback
        fontSize: size * 0.4, // Proportional font size
        fontWeight: 'bold',
      }}
    >
      {showFallback && (!imagePath || loading) ? companyName.charAt(0).toUpperCase() : null}
    </Avatar>
  );
};