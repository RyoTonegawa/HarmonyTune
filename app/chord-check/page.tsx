"use client";
import React, { useState } from "react";
import KeySignatureInput from "@/app/components/form/KeySignature";
import SubmitButton from "@/app/components/form/SubmitButton";
import ResultDisplay from "@/app/components/checkChordResult/ResultDisplay";
import PianoRoll from "@/app/components/PianoRoll/PianoRoll";
import Layout from "@/app/components/layout/Layout";
export interface ChordTone {
  degree: number;
  noteNumber: number;
  noteName: string;
  semiToneInterval: number;
  degreeName: string;
  justNotation: number;
  equalTemperament: number;
  centsDifference: number;
}

export interface Chord {
  rootDegreeName: string;
  rootDegree: number;
  rootNoteNumber: number;
  degreeList: string[];
  quality: string;
  chordToneList: ChordTone[];
}

export interface ChordCheckResult {
  chordList: Chord[];
}

export default function ChordCheck() {
  const [keySignature, setKeySignature] = useState<string>("C");
  const [selectedNoteNumberList, setSelectedNoteNumberList] = useState<
    number[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [chordResult, setChordResult] = useState<ChordCheckResult | null>(null);
  const handleTune = async () => {
    if (selectedNoteNumberList.length == 0) {
      alert("Please select at least 3 notes ! ");
      return;
    }
    setLoading(true);
    setError("");
    setChordResult(null);

    const payload = {
      noteNumberList: selectedNoteNumberList,
      keySignature: keySignature,
    };
    try {
      // http://localhost:8080/chord/checkにPOSTリクエストを送信
      const url = "https://harmonytunebackend.onrender.com/chord/check";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        throw new Error("Umm... sorry, something went wrong.");
      }
      const data: ChordCheckResult = await res.json();
      setChordResult(data);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <KeySignatureInput value={keySignature} onChange={setKeySignature} />
        <PianoRoll
          selectedNoteNumberList={selectedNoteNumberList}
          selectedNoteNumberOnChange={setSelectedNoteNumberList}
        />
        <SubmitButton onClick={handleTune} />
        {loading && (
          <div className="flex justify-center items-center mt-4 dark:bg-background">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900 dark:border-white" />
          </div>
        )}
        {error && <div>{error}</div>}
        {chordResult && <ResultDisplay chordCheckResult={chordResult} />}
      </div>
    </Layout>
  );
}
