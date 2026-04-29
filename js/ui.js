export function createMovieCard(movie) {
    const card = document.createElement('div');
    card.classList.add('movie-card');

    card.innerHTML = `
        <img src="${movie.Poster !== 'N/A' ? movie.Poster : 'assets/placeholder.png'}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
        <button data-id="${movie.imdbID}" class="details-btn">Details</button>
        <button data-id="${movie.imdbID}" class="fav-btn">Favorite</button>
    `;

    return card;
}

export function renderMovies(container, movies) {
    container.innerHTML = '';
    movies.forEach(movie => container.appendChild(createMovieCard(movie)));
}

export function showError(message) {
    document.querySelector('#error').textContent = message;
}

export function showLoading() {
    document.querySelector('#loading').classList.remove('hidden');
}

export function hideLoading() {
    document.querySelector('#loading').classList.add('hidden');
}

export function showModal(movie) {
    const modal = document.querySelector('#modal');
    const body = document.querySelector('#modal-body');

    body.innerHTML = `
        <h2>${movie.Title}</h2>
        <img src="${movie.Poster}">
        <p><strong>Year:</strong> ${movie.Year}</p>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p>${movie.Plot}</p>
    `;

    modal.classList.remove('hidden');
}

export function closeModal() {
    document.querySelector('#modal').classList.add('hidden');
}
