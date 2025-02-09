'use client'

import React, { useState } from 'react';
import KeySignatureInput from './components/form/KeySignature';
import SubmitButton from './components/form/SubmitButton';
import ResultDisplay from './components/ResultDisplay';
import PianoRoll from './components/PianoRoll/PianoRoll';
interface chordTone{
  degree:number;
  noteNumber:number;
  noteName:string;
  semiToneInterval:number;
  degreeName:string;
  justNotation:number;
  equalTemperament:number;
  centsDifference:number;
}

interface Chord{
  rootDegreeName:string;
  rootDegree:number;
  rootNoteNumber:number;
  degreeList:string[];
  quality:string;
  chordToneList:chordTone[];
}

interface Result {
  chordList: Chord[];
}

export default function Home() {
  const [keySignature, setKeySignature] = useState<string>('C');
  const [selectedNoteNumberList, setSelectedNoteNumberList] = useState<number[]>([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");
  const [chordResult,setChordResult] = useState<Result|null>(null);
  const handleTune = async()=>{
    if(selectedNoteNumberList.length == 0){
      alert("Please select at least 3 notes ! ");
      return;
    }
    setLoading(true);
    setError("");
    setChordResult(null);
  
    const payload ={
      noteNumberList:selectedNoteNumberList,
      keySignature : keySignature
    }
    try{
      // http://localhost:8080/chord/checkにPOSTリクエストを送信
      const url = "https://harmonytunebackend.onrender.com/chord/check";
      const res = await fetch(
        url,
        {
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(payload)
        }
      )
      if(!res.ok){
        throw new Error("Umm... sorry, something went wrong.")
      }
      const data:Result = await res.json();
      setChordResult(data);
    }catch(error:any){
      setError(error.message);
    }finally{
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>HarmonyTune</h1>
      <KeySignatureInput value={keySignature} onChange={setKeySignature} />
      <PianoRoll 
      selectedNoteNumberList={selectedNoteNumberList}
      selectedNoteNumberOnChange={setSelectedNoteNumberList}
      /> 
      <SubmitButton onClick={handleTune} />
      {loading && <div>Checking...</div>}
      {error && <div>{error}</div>}
      {chordResult&& (
        <ResultDisplay
          chordquality={chordResult.chordList[0].quality}
          chordName={chordResult.chordList[0].chordToneList.map(tone=>tone.noteName)}
        />
      )}
    </div>
  );
}
