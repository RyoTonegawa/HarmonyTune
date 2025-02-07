'use client';

import React from 'react';
import { Button } from '@mui/material';

interface SubmitButtonProps {
  onClick?: () => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick }) => {

  return (
    <Button 
    type="submit" 
    variant="contained" 
    color="primary" 
    fullWidth
    onClick={onClick}
    >
      Check Chord and Tune !
    </Button>
  );
};

export default SubmitButton;
