import { initEvents } from './events.js';

import { getFavorites } from './storage.js';

import { renderMovies } from './ui.js';

/**
 * Application entry point
 */
document.addEventListener('DOMContentLoaded', () => {

    // Initialize all event listeners
    initEvents();

    // Load favorite movies from localStorage
    const favoritesContainer =
        document.querySelector('#favorites');

    const favorites = getFavorites();

    // Render favorite movies on page load
    renderMovies(
        favoritesContainer,
        favorites,
        true
    );
});
