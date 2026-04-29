import { searchMovies, getMovieDetails } from './api.js';
import { renderMovies, showError, showLoading, hideLoading, showModal, closeModal } from './ui.js';
import { addFavorite } from './storage.js';

export function initEvents() {

    const searchBtn = document.querySelector('#search-btn');
    const input = document.querySelector('#search-input');
    const results = document.querySelector('#results');

    // ENTER support
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchBtn.click();
    });

    searchBtn.addEventListener('click', async () => {
        const query = input.value.trim();

        if (!query) {
            showError("Please enter a movie title.");
            return;
        }

        try {
            showLoading();

            const movies = await searchMovies(query);
            renderMovies(results, movies);

        } catch (err) {
            showError(err.message);
        } finally {
            hideLoading();
        }
    });

    // Event delegation
    results.addEventListener('click', async (e) => {

        const id = e.target.dataset.id;

        if (e.target.classList.contains('fav-btn')) {
            const movie = await getMovieDetails(id);
            addFavorite(movie);
        }

        if (e.target.classList.contains('details-btn')) {
            const movie = await getMovieDetails(id);
            showModal(movie);
        }
    });

    document.querySelector('#close-modal')
        .addEventListener('click', closeModal);
}
