import React, { useState } from 'react';
import PianoKey from './PianoKey';
interface PianorollProps{
  // 選択された音のリスト
  selectedNoteNumberList:number[];
  // 音を選択した時に新しい音を追加するための関数
  selectedNoteNumberOnChange:(notes:number[])=>void;
}
// 定義したノート情報（音の周波数は今回は使用しない）
const NOTES = {
  C: 0,
  'C#': 1,
  D: 2,
  'D#': 3,
  E: 4,
  F: 5,
  'F#': 6,
  G: 7,
  'G#': 8,
  A: 9,
  'A#': 10,
  B: 11,
} as const;


// 白鍵・黒鍵の判定：＃が含まれているかどうかで判定
// ＃が含まれている場合は黒鍵、含まれていない場合は白鍵
const isBlackKey = (note: string) => note.includes('#');

const PianoRoll: React.FC<PianorollProps> = ({
  selectedNoteNumberList,
  selectedNoteNumberOnChange
 }) => {
  const toggleNote = (noteNumber:number)=>{
    if(selectedNoteNumberList.includes(noteNumber)){
      selectedNoteNumberOnChange(
        selectedNoteNumberList.filter((selectedNote)=>{
          // 選択されている音を配列から削除。
          return selectedNote !== noteNumber;
        })
      )
    }else{
      if(selectedNoteNumberList.length < 3){
        selectedNoteNumberOnChange([
          ...selectedNoteNumberList,
          noteNumber
        ])
      }else{
        alert('選択できるのは3つまでです。')
      }
    };
  }

  return (
    <div className="flex justify-center">
      {/* piano keys */}
      {(Object.keys(NOTES) as Array<keyof typeof NOTES>).map((noteNumber) => (
        <PianoKey
          key={noteNumber}
          selected = {selectedNoteNumberList.includes(NOTES[noteNumber])}
          isBlack={isBlackKey(noteNumber)}
          onToggle={toggleNote}
          noteNumber={NOTES[noteNumber]}
        />
      ))}
    </div>
  );
};

export default PianoRoll;
