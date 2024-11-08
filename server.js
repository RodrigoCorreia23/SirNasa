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
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Caminho para o arquivo HTML
});

// Obter a chave da API da NASA do arquivo .env
const NASA_API_KEY = process.env.OPENW_photo_Nasa;

// Endpoint para pesquisar fotos usando a API de imagens da NASA
app.get('/api/nasa/search', async (req, res) => {
    const query = req.query.q; // Captura a consulta de pesquisa
    const limit = parseInt(req.query.limit) || 20; // Define um limite padrão de 20 se não especificado

    try {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${encodeURIComponent(query)}`);

        // Verifique se `items` existe antes de tentar acessá-lo
        if (response.data && response.data.collection && response.data.collection.items) {
            // Limitar o número de itens retornados
            const limitedResults = response.data.collection.items.slice(0, limit);

            // Enviar apenas os resultados limitados
            res.json(limitedResults);
        } else {
            // Caso `items` não exista, retorna uma resposta vazia
            res.json([]);
        }
    } catch (error) {
        console.error('Error fetching search results from NASA API:', error);
        res.status(500).json({ error: 'Failed to fetch search results from NASA API' });
    }
});




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




















// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
