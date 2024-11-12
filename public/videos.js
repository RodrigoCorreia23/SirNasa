async function fetchVideos(query) {
    try {
        const response = await fetch(`/api/youtube/search?q=${encodeURIComponent(query)}&limit=10`);
        const results = await response.json();

        if (Array.isArray(results)) {
            displayVideoResults(results);
        } else {
            alert('Nenhum vídeo encontrado.');
        }
    } catch (error) {
        console.error('Erro ao buscar vídeos:', error);
        alert('Erro ao buscar vídeos. Tente novamente mais tarde.');
    }
}

function displayVideoResults(results) {
    const videoContainer = document.getElementById('video-results');
    videoContainer.innerHTML = '';

    results.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.className = 'video-item';

        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`;
        iframe.width = '100%';
        iframe.height = '315';
        iframe.allowFullscreen = true;

        const title = document.createElement('h2');
        title.textContent = video.snippet.title;

        videoElement.appendChild(iframe);
        videoElement.appendChild(title);
        videoContainer.appendChild(videoElement);
    });
}

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const query = getQueryParam('query');
if (query) {
    fetchVideos(query);
}
