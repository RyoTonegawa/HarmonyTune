'use client'

import React, { useState } from 'react';
import KeySignatureInput from './components/form/KeySignature';
import SubmitButton from './components/form/SubmitButton';
import ResultDisplay from './components/ResultDisplay';
import PianoRoll from './components/PianoRoll/PianoRoll';
interface degreeList{
  degreeList:string[];
  quality:string;
  chordName:string;
}
interface Result {
  chordList: degreeList[];
}

export default function Home() {
  const [keySignature, setKeySignature] = useState<string>('C');
  const [selectedNoteNumberList, setSelectedNoteNumberList] = useState<number[]>([]);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");
  const [chordResult,setChordResult] = useState<string[]|null>(null);
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
      const res = await fetch(
        // "https://harmonytunebackend.onrender.com/chord/check",
        "http://localhost:8080/chord/check",
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
      console.log(res);
      setChordResult(data.chordList.map((eachChord)=>{
        return eachChord.chordName
      }));
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
          keySignature={keySignature}
          chordName={chordResult}
        />
      )}
    </div>
  );
}
