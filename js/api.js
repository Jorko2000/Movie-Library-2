import { API_KEY, BASE_URL } from './config.js';

export async function searchMovies(query) {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);

    if (!response.ok) {
        throw new Error("Server error. Try again later.");
    }

    const data = await response.json();

    if (data.Response === "False") {
        throw new Error(data.Error);
    }

    return data.Search;
}

export async function getMovieDetails(id) {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);

    if (!response.ok) {
        throw new Error("Failed to fetch movie details.");
    }

    return await response.json();
}
