const KEY = 'favorites';

export function getFavorites() {
    return JSON.parse(localStorage.getItem(KEY)) || [];
}

export function addFavorite(movie) {
    const favs = getFavorites();

    if (favs.some(m => m.imdbID === movie.imdbID)) return;

    favs.push(movie);
    localStorage.setItem(KEY, JSON.stringify(favs));
}

export function removeFavorite(id) {
    const updated = getFavorites().filter(m => m.imdbID !== id);
    localStorage.setItem(KEY, JSON.stringify(updated));
}
