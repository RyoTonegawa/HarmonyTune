import { ChordCheckResult } from "@/app/page";
import React from "react";
import ResultContainer from "./ResultContainer";

interface ResultDisplayProps {
  chordCheckResult: ChordCheckResult;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ chordCheckResult }) => {
  return (
    <>
      <ResultContainer chordCheckResult={chordCheckResult} />
    </>
  );
};

export default ResultDisplay;
