export type Genre =
  | 'Science Fiction'
  | 'Horror'
  | 'Suspense'
  | 'Comedy'
  | 'Biography'
  | 'Fantasy'
  | 'Mystery'
  | 'Romance'
  | 'Thriller'
  | 'Adventure';

export type NarrativeStyle =
  | 'Poem'
  | 'Narrative'
  | 'Storytelling'
  | 'Dialogue'
  | 'Diary';

export type Audience =
  | 'Kids 3-9 years'
  | 'Children 10-17 years'
  | 'Adults 18+ years';

export interface StoryRequest {
  genre: Genre;
  narrativeStyle: NarrativeStyle;
  audience: Audience;
  additionalIdeas?: string;
}

export interface StoryResponse {
  story: string;
  id: string;
}