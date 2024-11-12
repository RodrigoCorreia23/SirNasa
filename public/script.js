document.getElementById('search-button').addEventListener('click', async () => {
    const query = document.getElementById('search-input').value;
    const limit = 20; // Limite de resultados

    try {
        const response = await fetch(`/api/nasa/search?q=${encodeURIComponent(query)}&limit=${limit}`);
        const results = await response.json();

    
        if (Array.isArray(results)) {
            displayResults(results);
        } else {
            console.error('Resultado inesperado da API:', results);
            alert('Nenhum resultado encontrado.');
        }
    } catch (error) {
        console.error('Erro ao buscar resultados:', error);
        alert('Erro ao buscar resultados. Tente novamente mais tarde.');
    }
});

function displayResults(results) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Limpa resultados anteriores

    results.forEach(item => {
        const img = document.createElement('img');
        img.src = item.links && item.links[0] ? item.links[0].href : ''; // Verifica se existe link de imagem
        img.alt = item.data && item.data[0] ? item.data[0].title : 'Imagem sem título';
        resultsContainer.appendChild(img);
    });
}

// videos

document.getElementById('videos-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    window.location.href = `/videos.html?query=${encodeURIComponent(query)}`;
});


//artigos

document.getElementById('articles-btn').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    window.location.href = `/artigos.html?query=${encodeURIComponent(query)}`;
});
