// backend/server.js
const express = require('express');
const cors = require('cors');
const { pipeline } = require('@huggingface/inference');


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

async function analyzeText(text) {
  // ... (same analyzeText function as before)
}


app.post('/analyze', async (req, res) => {
  // ... (same app.post function as before)
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
