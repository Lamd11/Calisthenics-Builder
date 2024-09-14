// /pages/api/getNews.js

export default async function handler(req, res) {
    const apiKey = '6df90f8539614bdc9c37e12e2edbafdb';
    const url = `https://newsapi.org/v2/everything?q=exercise&apiKey=${apiKey}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      // Check for errors
      if (!response.ok) {
        return res.status(response.status).json({ error: response.statusText });
      }
  
      res.status(200).json(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
      res.status(500).json({ error: 'Failed to fetch news' });
    }
  }
  