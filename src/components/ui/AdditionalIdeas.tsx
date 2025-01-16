// File: src/components/ui/AdditionalIdeas.tsx
import React from 'react';

interface AdditionalIdeasProps {
  additionalIdeas: string;
  setAdditionalIdeas: (ideas: string) => void;
}

export default function AdditionalIdeas({ additionalIdeas, setAdditionalIdeas }: AdditionalIdeasProps) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Additional Ideas (Optional)</h2>
      <textarea
        className="w-full border rounded p-2"
        rows={4}
        value={additionalIdeas}
        onChange={(e) => setAdditionalIdeas(e.target.value)}
        placeholder="Enter any additional ideas to include in your story..."
      ></textarea>
    </div>
  );
}