import React from "react";
const NOTE_NUMBER_LIST = {
  60: "C4",
  61: "C#",
  62: "D",
  63: "D#",
  64: "E",
  65: "F",
  66: "F#",
  67: "G",
  68: "G#",
  69: "A",
  70: "A#",
  71: "B",
} as const;
interface PianoKeyProps {
  noteNumber: number;
  selected: boolean;
  isBlack: boolean;
  onToggle: (note: number) => void;
}

const PianoKey: React.FC<PianoKeyProps> = ({
  noteNumber,
  selected,
  isBlack,
  onToggle,
}) => {
  // 白鍵と黒鍵でスタイルを分ける
  // スタイリング（白鍵・黒鍵・選択状態）
  const backgroundClass = selected
    ? isBlack
      ? "bg-green-900"
      : "bg-green-200"
    : isBlack
    ? "bg-gray-900 text-white"
    : "bg-white text-gray-900";

  const sizeClass = isBlack ? "h-32 w-12 -mx-6 z-10" : "h-48 w-16";

  const classes = `${backgroundClass} ${sizeClass} 
  relative flex items-end justify-center pb-4 
  border border-gray-300 transition-opacity 
  duration-100 hover:opacity-90 focus:outline-none 
  focus:ring-2 focus:ring-blue-500`;
  return (
    <button
      onClick={() => onToggle(noteNumber)}
      className={classes}
      aria-label={`Key ${
        NOTE_NUMBER_LIST[noteNumber as keyof typeof NOTE_NUMBER_LIST]
      }`}
    >
      {NOTE_NUMBER_LIST[noteNumber as keyof typeof NOTE_NUMBER_LIST]}
    </button>
  );
};

export default PianoKey;
