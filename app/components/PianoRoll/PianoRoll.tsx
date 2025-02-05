import React, { useState } from 'react';
import PianoKey from './PianoKey';

// 定義したノート情報（音の周波数は今回は使用しない）
const NOTES = {
  C: 261.63,
  'C#': 277.18,
  D: 293.66,
  'D#': 311.13,
  E: 329.63,
  F: 349.23,
  'F#': 369.99,
  G: 392.0,
  'G#': 415.3,
  A: 440.0,
  'A#': 466.16,
  B: 493.88,
} as const;

// 白鍵・黒鍵の判定：＃が含まれているかどうかで判定
// ＃が含まれている場合は黒鍵、含まれていない場合は白鍵
const isBlackKey = (note: string) => note.includes('#');

const PianoRoll: React.FC = () => {
  // 選択されたノートを管理
  const [
    selectedNotes, 
    setSelectedNotes  
  ] = useState<string[]>([]);
  // キーの情報を管理
  // const[
  //   keySignature,
  //   setKeySignature
  // ] = useState('C')
  const toggleNote = (note:string)=>{
    if(selectedNotes.includes(note)){
      setSelectedNotes(
        selectedNotes.filter((selectedNote)=>{
          // 選択されている音を配列から削除。
          return selectedNote !== note;
        })
      )
    }else{
      if(selectedNotes.length < 3){
        setSelectedNotes([
          ...selectedNotes,
          note
        ])
      }else{
        alert('選択できるのは3つまでです。')
      }
    };
  }
  // const handleTune = async()=>{
  //   const payload ={
  //     notes:selectedNotes,
  //     key : keySignature
  //   }

  // }
  return (
    <div className="flex justify-center">
      {/* piano keys */}
      {(Object.keys(NOTES) as Array<keyof typeof NOTES>).map((note) => (
        <PianoKey
          key={note}
          note={note}
          // なぜselectedNotes.includes(note)となっているのか？
          selected = {selectedNotes.includes(note)}
          isBlack={isBlackKey(note)}
          onToggle={toggleNote}
        />
      ))}
    </div>
  );
};

export default PianoRoll;
