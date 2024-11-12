// server.js

require('dotenv').config();
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para servir arquivos estáticos (CSS, JS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial (HTML)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Obter a chave da API 
const NASA_API_KEY = process.env.NASA_API_KEY;
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;
const NOTICIAS_API_KEY = process.env.NOTICIAS_API_KEY;

// Endpoint para pesquisar fotos usando a API de imagens da NASA
app.get('/api/nasa/search', async (req, res) => {
    const query = req.query.q;
    const limit = parseInt(req.query.limit) || 20;

    try {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}`);
        if (response.data && response.data.collection && response.data.collection.items) {
            const limitedResults = response.data.collection.items.slice(0, limit);
            res.json(limitedResults);
        } else {
            res.json([]);
        }
    } catch (error) {
        console.error('Erro ao buscar resultados da API da NASA:', error);
        res.status(500).json({ error: 'Falha ao buscar resultados da API da NASA' });
    }
});

// Novo endpoint para pesquisar vídeos no YouTube
app.get('/api/youtube/search', async (req, res) => {
    const query = req.query.q;
    const limit = parseInt(req.query.limit) || 10;

    try {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
            params: {
                q: query,
                part: 'snippet',
                type: 'video',
                maxResults: limit,
                key: YOUTUBE_API_KEY
            }
        });

        res.json(response.data.items);
    } catch (error) {
        console.error('Erro ao buscar vídeos na API do YouTube:', error);
        res.status(500).json({ error: 'Falha ao buscar vídeos na API do YouTube' });
    }
});


// Rota para buscar artigos da News API
app.get('/api/news/search', async (req, res) => {
    const query = req.query.q;

    try {
        const response = await axios.get('https://newsapi.org/v2/everything', {
            params: {
                q: query,
                apiKey: NOTICIAS_API_KEY,
                language: 'pt',
                pageSize: 10
            }
        });

        res.json(response.data.articles);
    } catch (error) {
        console.error('Erro ao buscar artigos da News API:', error);
        res.status(500).json({ error: 'Falha ao buscar artigos da News API' });
    }
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
