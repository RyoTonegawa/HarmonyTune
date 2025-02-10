"use client";

import React from "react";
import { Chord } from "@/app/chord-check/page";
import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface ChordAccordionProps {
  chord: Chord;
}

const ChordAccordion: React.FC<ChordAccordionProps> = ({ chord }) => {
  return (
    <AccordionItem
      value={chord.rootDegreeName}
      className="border-rounded-lg p-2 bg-gray-100"
    >
      <AccordionTrigger
        className="
        w-full flex justify-between 
        items-center px-2 py-1 bg-white rounded-md 
        cursor-pointer hover:bg-gray-200"
      >
        <span className="text-lg font-bold">{chord.rootDegreeName}</span>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="mt-2 text-sm text-gray-800">
          {chord.chordToneList.map((tone, index) => (
            <li key={index} className="py-1">
              {tone.degree}度({tone.degreeName}){" : "}
              {tone.noteName}
              {"   純正律まで"}
              <strong>{tone.centsDifference.toFixed(1)}</strong> cent
            </li>
          ))}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};

export default ChordAccordion;
