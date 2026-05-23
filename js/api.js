import { API_KEY, BASE_URL } from './config.js';

/**
 * Fetch movies by search query
 * @param {string} query
 * @returns {Promise<Array>}
 */
export async function searchMovies(query) {
    const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&s=${query}`
    );

    if (!response.ok) {
        throw new Error('Server error. Please try again later.');
    }

    const data = await response.json();

    if (data.Response === 'False') {
        throw new Error(data.Error);
    }

    return data.Search;
}

/**
 * Fetch full movie details by IMDb ID
 * @param {string} id
 * @returns {Promise<Object>}
 */
export async function getMovieDetails(id) {
    const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&i=${id}`
    );

    if (!response.ok) {
        throw new Error('Failed to fetch movie details.');
    }

    return await response.json();
}
