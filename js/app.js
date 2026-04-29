import { initEvents } from './events.js';
import { getFavorites } from './storage.js';
import { renderMovies } from './ui.js';

document.addEventListener('DOMContentLoaded', () => {
    initEvents();

    const favoritesContainer = document.querySelector('#favorites');
    const favorites = getFavorites();

    renderMovies(favoritesContainer, favorites);
});
