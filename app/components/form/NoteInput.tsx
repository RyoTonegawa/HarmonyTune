'use client';

import React from 'react';
import { TextField } from '@mui/material';

interface NoteInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const NoteInput: React.FC<NoteInputProps> = ({ label, value, onChange }) => {
  
  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      margin="normal"
    />
  );
};

export default NoteInput;
