import React from "react";

interface Adjustment{
  note:string;
  cents:number;
}

interface ResultDisplayProps{
  chordquality:string;
  chordName:string[];
  // adjustments:Adjustment[];
}

const ResultDisplay:React.FC<ResultDisplayProps>=({
  chordquality,
  chordName
})=>{
  return(
    <div style={{marginTop:"20px"}}>
      <h2>Chord Check Result</h2>
      <p>Key Siganture: {chordquality}</p>
      <p>Chord Name: {chordName}</p>
    </div>
  );
};

export default ResultDisplay;