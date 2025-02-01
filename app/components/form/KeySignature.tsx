import React from 'react';
import { TextField } from '@mui/material';

interface KeySignatureInputProps {
  value: string;
  onChange:(
    value:string
  ) =>  void;
}

const KeySignatureInput:React.FC<KeySignatureInputProps> = (
  {value,onChange}
  )=>{
    return(
      <TextField
        label = "KeySignature"
        variant='outlined'
        value={value}
        onChange={(e)=> onChange(e.target.value)}
        fullWidth
        margin = "normal"
      />
    );
}

export default KeySignatureInput;