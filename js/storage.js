const STORAGE_KEY = 'favoriteMovies';

/**
 * Get favorite movies from localStorage
 * @returns {Array}
 */
export function getFavorites() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
}

/**
 * Add movie to favorites
 * @param {Object} movie
 */
export function addFavorite(movie) {
    const favorites = getFavorites();

    const alreadyExists = favorites.some(
        fav => fav.imdbID === movie.imdbID
    );

    if (alreadyExists) {
        return;
    }

    favorites.push(movie);

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(favorites)
    );
}

/**
 * Remove movie from favorites
 * @param {string} id
 */
export function removeFavorite(id) {
    const updatedFavorites = getFavorites().filter(
        movie => movie.imdbID !== id
    );

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedFavorites)
    );
}
