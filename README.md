# Echor Tech - Text Transformation API

A Node.js/TypeScript Express API that transforms text input and provides word count, unique words, and reversed sentence.

## Features

- POST endpoint `/api/transform` for text transformation
- Returns word count, unique words (lowercase), and reversed sentence
- Built with TypeScript for type safety
- Input validation and error handling

## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd echor-tech-api
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm run build
npm start
```

The server will start on `http://localhost:3000`

## API Endpoint

### POST /api/transform

**Request:**
```json
{
  "sentence": "I love working with JavaScript and Node.js"
}
```

**Response:**
```json
{
  "word_count": 7,
  "unique_words": ["i", "love", "working", "with", "javascript", "and", "node.js"],
  "reversed_sentence": "Node.js and JavaScript with working love I"
}
```

## Testing with cURL

```bash
curl -X POST http://localhost:3000/api/transform \
  -H "Content-Type: application/json" \
  -d '{"sentence": "I love working with JavaScript and Node.js"}'
```

## Testing with Postman

1. Set method to `POST`
2. URL: `http://localhost:3000/api/transform`
3. Headers: `Content-Type: application/json`
4. Body (raw JSON):
```json
{
  "sentence": "I love working with JavaScript and Node.js"
}
```

## Project Structure

```
echor-tech-api/
├── src/
│   └── index.ts          # Main application file
├── dist/                 # Compiled JavaScript (generated)
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── .gitignore           # Git ignore file
└── README.md            # This file
```

## Technologies Used

- Node.js
- Express.js
- TypeScript
- ts-node (for development)

## Author

Created for Echor Tech Assignment

## License

ISC