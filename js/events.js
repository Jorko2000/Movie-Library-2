import {
    searchMovies,
    getMovieDetails
} from './api.js';

import {
    renderMovies,
    showError,
    clearError,
    showLoading,
    hideLoading,
    showModal,
    closeModal
} from './ui.js';

import {
    addFavorite,
    removeFavorite,
    getFavorites
} from './storage.js';

/**
 * Initialize all application events
 */
export function initEvents() {

    const searchBtn = document.querySelector('#search-btn');
    const searchInput = document.querySelector('#search-input');

    const resultsContainer = document.querySelector('#results');
    const favoritesContainer = document.querySelector('#favorites');

    // Search button event
    searchBtn.addEventListener('click', async () => {

        const query = searchInput.value.trim();

        clearError();

        if (!query) {
            showError('Please enter a movie title.');
            return;
        }

        try {
            showLoading();

            const movies = await searchMovies(query);

            renderMovies(resultsContainer, movies);

        } catch (error) {
            showError(err
