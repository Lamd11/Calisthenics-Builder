import fetch from 'node-fetch';
require('dotenv').config();

export default async function handler(req, res) {
    const apiKey = process.env.NEWS_API_KEY;
    const apiUrl = `https://newsapi.org/v2/everything?q=exercise&apiKey=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data from NewsAPI' });
    }
}
