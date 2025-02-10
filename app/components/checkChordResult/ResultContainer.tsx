import React from "react";
import { ChordCheckResult } from "@/app/chord-check/page";
import { Accordion } from "@/components/ui/accordion";
import ChordAccordion from "./ChordAccordion";

interface ResultContainerProps {
  chordCheckResult: ChordCheckResult;
}

const ResultContainer: React.FC<ResultContainerProps> = ({
  chordCheckResult,
}) => {
  return (
    <div className="mt-6 w-full max-w-lg mx-auto p-4 border rounded-lg">
      <h2 className="text-lg text-muted-foreground">Chord Check Result</h2>
      <Accordion type="multiple" className="mt-4">
        {chordCheckResult.chordList.map((chord, index) => (
          <ChordAccordion key={index} chord={chord} />
        ))}
      </Accordion>
    </div>
  );
};

export default ResultContainer;
