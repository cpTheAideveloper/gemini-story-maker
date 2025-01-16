// File: src/app/api/generate-story/route.ts
import { NextResponse } from 'next/server';
import { StoryRequest, StoryResponse } from '@/types';
import { chattogemini } from '@/utils/chattogemini';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: Request) {
  try {
    const body: StoryRequest = await request.json();
    const story = await chattogemini(body);
    const response: StoryResponse = {
      story,
      id: uuidv4(),
    };
    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate story.' }, { status: 500 });
  }
}