// File: src/components/ui/AudienceSelection.tsx
import React from 'react';
import { Audience } from '@/types';

interface AudienceSelectionProps {
  selectedAudience: Audience;
  setSelectedAudience: (audience: Audience) => void;
}

const audiences: Audience[] = [
  'Kids 3-9 years',
  'Children 10-17 years',
  'Adults 18+ years',
];

export default function AudienceSelection({ selectedAudience, setSelectedAudience }: AudienceSelectionProps) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Select Audience</h2>
      <div className="grid grid-cols-1 gap-2">
        {audiences.map((audience) => (
          <button
            key={audience}
            className={`px-4 py-2 border rounded ${
              selectedAudience === audience ? 'bg-red-500 text-white' : 'bg-white text-black'
            }`}
            onClick={() => setSelectedAudience(audience)}
          >
            {audience}
          </button>
        ))}
      </div>
    </div>
  );
}