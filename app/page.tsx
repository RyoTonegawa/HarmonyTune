'use client'

import React, { useState } from 'react';
import KeySignatureInput from './components/form/KeySignature';
// import NoteInput from './components/form/NoteInput';
import SubmitButton from './components/form/SubmitButton';
import ResultDisplay from './components/ResultDisplay';
import { determineChord, calculateCentsAdjustment } from './utils/chordUtils';
import PianoRoll from './components/PianoRoll/PianoRoll';
interface NoteAdjustment {
  note: string;
  cents: number;
}

interface Result {
  chordName: string;
  adjustments: NoteAdjustment[];
}

export default function Home() {
  const [keySignature, setKeySignature] = useState<string>('C');
  const [notes, setNotes] = useState<string[]>(['', '', '']);
  const [result, setResult] = useState<Result>({
    chordName: '',
    adjustments: [],
  });
  const handleSubmit = () => {
    const chordName = determineChord(notes);
    const chordType: 'major' | 'minor' = chordName.includes('Major') ? 'major' : 'minor';

    const adjustments = notes.map((note, index) => {
    const role: 'root' | 'third' | 'fifth' =
        index === 0 ? 'root' : index === 1 ? 'third' : 'fifth';
      return {
        note,
        cents: calculateCentsAdjustment(role, chordType), // 計算した値を取得
      };
    });

    setResult({ chordName, adjustments });
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>HarmonyTune</h1>
      <KeySignatureInput value={keySignature} onChange={setKeySignature} />
      <PianoRoll/> 
      {/* <NoteInput label="Note 1" value={notes[0]} onChange={(value) => setNotes([value, notes[1], notes[2]])} />
      <NoteInput label="Note 2" value={notes[1]} onChange={(value) => setNotes([notes[0], value, notes[2]])} />
      <NoteInput label="Note 3" value={notes[2]} onChange={(value) => setNotes([notes[0], notes[1], value])} /> */}
      <SubmitButton onClick={()=>{
        handleSubmit()
        }
        } />
      
      {result.chordName && (
        <ResultDisplay
          keySignature={keySignature}
          chordName={result.chordName}
          adjustments={result.adjustments}
        />
      )}
    </div>
  );
}
