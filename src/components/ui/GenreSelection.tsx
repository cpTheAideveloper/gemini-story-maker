// File: src/components/ui/GenreSelection.tsx
import React from 'react';
import { Genre } from '@/types';

interface GenreSelectionProps {
  selectedGenre: Genre;
  setSelectedGenre: (genre: Genre) => void;
}

const genres: Genre[] = [
  'Science Fiction',
  'Horror',
  'Suspense',
  'Comedy',
  'Biography',
  'Fantasy',
  'Mystery',
  'Romance',
  'Thriller',
  'Adventure',
];

export default function GenreSelection({ selectedGenre, setSelectedGenre }: GenreSelectionProps) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Select Genre</h2>
      <div className="grid grid-cols-2 gap-2">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`px-4 py-2 border rounded ${
              selectedGenre === genre ? 'bg-blue-500 text-white' : 'bg-white text-black'
            }`}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}