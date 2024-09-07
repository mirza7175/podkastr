import { action } from "./_generated/server";
import { v } from "convex/values";
import OpenAI from "openai";
import { SpeechCreateParams } from "openai/resources/audio/speech.mjs";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const generateAudioAction = action({
  args: { input: v.string(), voice: v.string() },
  handler: async (_, { voice, input }) => {
    if (!input || !voice) {
      throw new Error("Invalid input or voice parameter");
    }

    try {
      const mp3 = await openai.audio.speech.create({
        model: "tts-1",
        voice: voice as SpeechCreateParams['voice'],
        input,
      });

      const buffer = await mp3.arrayBuffer();
      return buffer;
    } catch (error) {
      console.error("Error generating audio:", error);
      throw new Error("Failed to generate audio");
    }
  },
});

export const generateThumbnailAction = action({
  args: { prompt: v.string() },
  handler: async (_, { prompt }) => {
    if (!prompt) {
      throw new Error("Invalid prompt parameter");
    }

    try {
      const response = await openai.images.generate({
        model: 'dall-e-3',
        prompt,
        size: '1024x1024',
        quality: 'standard',
        n: 1,
      });

      const url = response.data[0]?.url;

      if (!url) {
        throw new Error('Error generating thumbnail');
      }

      const imageResponse = await fetch(url);
      const buffer = await imageResponse.arrayBuffer();
      return buffer;
    } catch (error) {
      console.error("Error generating image:", error);
      throw new Error("Failed to generate image");
    }
  },
});
