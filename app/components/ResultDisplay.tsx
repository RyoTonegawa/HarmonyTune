import React from "react";

interface Adjustment{
  note:string;
  cents:number;
}

interface ResultDisplayProps{
  keySignature:string;
  chordName:string;
  adjustments:Adjustment[];
}

const ResultDisplay:React.FC<ResultDisplayProps>=({
  keySignature,
  chordName,
  adjustments
})=>{
  return(
    <div style={{marginTop:"20px"}}>
      <h2>Result</h2>
      <p>Key Siganture: {keySignature}</p>
      <p>Chord Name: {chordName}</p>
      <ul>
        {adjustments.map((adjustment,index)=>(
          <li key = {index}>
            Note {index +1} ({adjustment.note}):{adjustment.cents} cents
          </li>

        ))}
      </ul>
    </div>
  );
};

export default ResultDisplay;