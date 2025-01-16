'use client';

import React, { useState } from 'react';
import GenreSelection from '@/components/ui/GenreSelection';
import NarrativeStyleSelection from '@/components/ui/NarrativeStyleSelection';
import AudienceSelection from '@/components/ui/AudienceSelection';
import AdditionalIdeas from '@/components/ui/AdditionalIdeas';
import LoadingSpinner from '@/components/ui/LoadingSpinner';
import StoryResult from '@/components/ui/StoryResult';
import { Genre, NarrativeStyle, Audience, StoryRequest, StoryResponse } from '@/types';

export default function Home() {
  const [genre, setGenre] = useState<Genre | null>(null);
  const [narrativeStyle, setNarrativeStyle] = useState<NarrativeStyle | null>(null);
  const [audience, setAudience] = useState<Audience | null>(null);
  const [additionalIdeas, setAdditionalIdeas] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [story, setStory] = useState<string>('');
  const [history, setHistory] = useState<StoryResponse[]>([]);

  const handleSubmit = async () => {
    if (!genre || !narrativeStyle || !audience) return;
    setLoading(true);
    const requestBody: StoryRequest = {
      genre,
      narrativeStyle,
      audience,
      additionalIdeas,
    };
    try {
      const response = await fetch('/api/generate-story', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });
      const data: StoryResponse = await response.json();
      setStory(data.story);
      setHistory([...history, data]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleStartOver = () => {
    setGenre(null);
    setNarrativeStyle(null);
    setAudience(null);
    setAdditionalIdeas('');
    setStory('');
  };

  if (story) {
    return <StoryResult story={story} onStartOver={handleStartOver} />;
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Google Gemini Story Maker</h1>
      <GenreSelection selectedGenre={genre!} setSelectedGenre={setGenre} />
      <NarrativeStyleSelection selectedStyle={narrativeStyle!} setSelectedStyle={setNarrativeStyle} />
      <AudienceSelection selectedAudience={audience!} setSelectedAudience={setAudience} />
      <AdditionalIdeas additionalIdeas={additionalIdeas} setAdditionalIdeas={setAdditionalIdeas} />
      <button
        className="w-full px-4 py-2 bg-green-500 text-white rounded"
        onClick={handleSubmit}
        disabled={!genre || !narrativeStyle || !audience || loading}
      >
        Generate Story
      </button>
      {loading && <LoadingSpinner />}
      {history.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">History</h2>
          <ul className="space-y-4">
            {history.map((item) => (
              <li key={item.id} className="p-4 border rounded">
                <p className="whitespace-pre-wrap">{item.story}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}