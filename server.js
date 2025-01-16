const { pipeline } = require('@huggingface/inference');

async function analyzeText(text) {
  try {
    const apiKey = process.env.HUGGING_FACE_API_KEY; // Access the environment variable


    const classifier = await pipeline(
      'sentiment-analysis',
      'distilbert-base-uncased-finetuned-sst-2-english',
       {
            api_key: apiKey, // Add the API key here ONLY IF needed

       }
    );


    // ... (rest of your code)
  } catch (error) {
    // ... error handling
  }
}
