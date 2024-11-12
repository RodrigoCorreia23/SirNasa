async function fetchArticles(query) {
    try {
        const response = await fetch(`/api/news/search?q=${encodeURIComponent(query)}`);
        const results = await response.json();

        if (Array.isArray(results) && results.length > 0) {
            displayArticles(results);
        } else {
            alert('Nenhum artigo encontrado.');
        }
    } catch (error) {
        console.error('Erro ao buscar artigos:', error);
        alert('Erro ao buscar artigos. Tente novamente mais tarde.');
    }
}

function displayArticles(articles) {
    const articlesContainer = document.getElementById('articles-container');
    articlesContainer.innerHTML = '';

    articles.forEach(article => {
        const articleDiv = document.createElement('div');
        articleDiv.className = 'article';

        const title = document.createElement('h2');
        title.textContent = article.title;

        const description = document.createElement('p');
        description.textContent = article.description || 'Descrição não disponível.';

        const link = document.createElement('a');
        link.href = article.url;
        link.textContent = 'Leia mais';
        link.target = '_blank';

        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(link);
        articlesContainer.appendChild(articleDiv);
    });
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const query = getQueryParam('query');
if (query) {
    fetchArticles(query);
}
