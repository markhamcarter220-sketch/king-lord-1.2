const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

let db;

MongoClient.connect(process.env.MONGO_URI, { useUnifiedTopology: true })
  .then(client => {
    db = client.db('betterbets');
    console.log('Connected to MongoDB');
  })
  .catch(err => console.error(err));

app.post('/logbet', async (req, res) => {
  try {
    const bet = req.body;
    const result = await db.collection('bets').insertOne(bet);
    res.status(200).json({ success: true, id: result.insertedId });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/', (req, res) => {
  res.send('KL1.2 Backend is running');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});