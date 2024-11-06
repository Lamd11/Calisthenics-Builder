require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());

console.log(process.env.REACT_APP_NEWS_API_KEY);

app.get('/api/news', async (req, res) => {
    try {
        const response = await axios.get(`https://newsapi.org/v2/everything`, {
            params: {
                q: 'exercise',
                apiKey: process.env.REACT_APP_NEWS_API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching data from NewsAPI:", error.message);
        res.status(500).json({ error: 'An error occurred while fetching news' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
