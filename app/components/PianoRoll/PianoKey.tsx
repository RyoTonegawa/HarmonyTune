import React from 'react';

interface PianoKeyProps {
  note: string;
  selected:boolean;
  isBlack: boolean;
  onToggle: (note:string) => void;
}

const PianoKey: React.FC<PianoKeyProps> = ({
  note,
  selected,
  isBlack,
  onToggle,
}) => {
  // 白鍵と黒鍵でスタイルを分ける
  const backgroundClass = selected ? 'bg-green-200' :
  isBlack
    ? 'bg-gray-900 text-white h-32 w-12 -mx-6 z-10'
    : 'bg-white text-gray-900 h-48 w-16';

  const sizeClass=isBlack ? 'h-32 w-12 -mx-6' : 'h-48 w-16';

  const classes = `${backgroundClass} ${sizeClass} 
  relative flex items-end justify-center pb-4 
  border border-gray-300 transition-opacity 
  duration-100 hover:opacity-90 focus:outline-none 
  focus:ring-2 focus:ring-blue-500`
  ;

  return (
    <button
      onClick={()=>onToggle(note)}
      className={classes}
      aria-label={`Key ${note}`}
    >
      {note}
    </button>
  );
};

export default PianoKey;
