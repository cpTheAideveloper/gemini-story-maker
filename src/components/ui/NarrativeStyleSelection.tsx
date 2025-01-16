// File: src/components/ui/NarrativeStyleSelection.tsx
import React from 'react';
import { NarrativeStyle } from '@/types';

interface NarrativeStyleSelectionProps {
  selectedStyle: NarrativeStyle;
  setSelectedStyle: (style: NarrativeStyle) => void;
}

const narrativeStyles: NarrativeStyle[] = [
  'Poem',
  'Narrative',
  'Storytelling',
  'Dialogue',
  'Diary',
];

export default function NarrativeStyleSelection({ selectedStyle, setSelectedStyle }: NarrativeStyleSelectionProps) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Select Narrative Style</h2>
      <div className="grid grid-cols-2 gap-2">
        {narrativeStyles.map((style) => (
          <button
            key={style}
            className={`px-4 py-2 border rounded ${
              selectedStyle === style ? 'bg-green-500 text-white' : 'bg-white text-black'
            }`}
            onClick={() => setSelectedStyle(style)}
          >
            {style}
          </button>
        ))}
      </div>
    </div>
  );
}