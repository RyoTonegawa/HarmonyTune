export const calculateCentsAdjustment = (
  note: 'root' | 'third' | 'fifth',
  chordType: 'major' | 'minor'
): number => {
  const justIntonationMap = {
    major: { root: 0, third: -14, fifth: 2 },
    minor: { root: 0, third: 16, fifth: 2 },
  };

  const tone = chordType === 'major' ? justIntonationMap.major : justIntonationMap.minor;
  return tone[note] ?? 0; // 未定義の場合に0を返す
};

export const determineChord = (notes: string[]): string => {
  if (notes.includes('C') && notes.includes('E') && notes.includes('G')) return 'C Major';
  if (notes.includes('C') && notes.includes('Eb') && notes.includes('G')) return 'C Minor';
  return 'Unknown';
};
