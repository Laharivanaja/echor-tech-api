import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// POST /api/transform endpoint
app.post('/api/transform', (req: Request, res: Response) => {
  try {
    const { sentence } = req.body;

    // Validate input
    if (!sentence || typeof sentence !== 'string') {
      return res.status(400).json({
        error: 'Invalid input. Please provide a "sentence" field with a string value.'
      });
    }

    // Process the sentence
    const words = sentence.trim().split(/\s+/);
    
    // Calculate word count
    const wordCount = words.length;

    // Get unique words (case-insensitive, lowercased)
    const uniqueWords = [...new Set(words.map(word => word.toLowerCase()))];

    // Reverse the sentence (word order)
    const reversedSentence = words.reverse().join(' ');

    // Send response
    res.json({
      word_count: wordCount,
      unique_words: uniqueWords,
      reversed_sentence: reversedSentence
    });

  } catch (error) {
    res.status(500).json({
      error: 'An error occurred while processing the request.'
    });
  }
});

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Test the API: POST http://localhost:${PORT}/api/transform`);
});

export default app;