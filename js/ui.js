/**
    container.innerHTML = '';

    movies.forEach(movie => {
        const card = createMovieCard(movie, isFavorite);
        container.appendChild(card);
    });
}

/**
 * Show error message
 * @param {string} message
 */
export function showError(message) {
    const errorDiv = document.querySelector('#error');
    errorDiv.textContent = message;
}

/**
 * Clear error message
 */
export function clearError() {
    document.querySelector('#error').textContent = '';
}

/**
 * Show loading state
 */
export function showLoading() {
    document.querySelector('#loading')
        .classList.remove('hidden');
}

/**
 * Hide loading state
 */
export function hideLoading() {
    document.querySelector('#loading')
        .classList.add('hidden');
}

/**
 * Show movie details in modal
 * @param {Object} movie
 */
export function showModal(movie) {

    const modal = document.querySelector('#modal');
    const modalBody = document.querySelector('#modal-body');

    modalBody.innerHTML = `
        <h2>${movie.Title}</h2>

        <img src="${movie.Poster}" alt="${movie.Title}" />

        <p><strong>Year:</strong> ${movie.Year}</p>
        <p><strong>Genre:</strong> ${movie.Genre}</p>
        <p><strong>Runtime:</strong> ${movie.Runtime}</p>
        <p><strong>IMDb Rating:</strong> ${movie.imdbRating}</p>

        <p>${movie.Plot}</p>
    `;

    modal.classList.remove('hidden');
}

/**
 * Close modal
 */
export function closeModal() {
    document.querySelector('#modal')
        .classList.add('hidden');
}
