// File: src/components/ui/StoryResult.tsx
import React from 'react';
import { StoryResponse } from '@/types';

interface StoryResultProps {
  story: string;
  onStartOver: () => void;
}

export default function StoryResult({ story, onStartOver }: StoryResultProps) {
  return (
    <div className="p-4 border rounded">
      <h2 className="text-2xl font-bold mb-4">Your Story</h2>
      <p className="whitespace-pre-wrap">{story}</p>
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={onStartOver}
      >
        Start Over
      </button>
    </div>
  );
}