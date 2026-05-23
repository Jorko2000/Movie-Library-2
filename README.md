#  MovieVault

MovieVault is a browser-based JavaScript application that allows users to search for movies using the OMDb API, view movie details, and manage a favorites list stored locally.

---

##  Features

- Search movies by title
- View movie details in a modal window
- Add movies to favorites
- Remove movies from favorites
- Save favorites using localStorage
- Dynamic DOM rendering
- Loading state
- Error handling
- Enter key search support

---

##  Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6 Modules)
- Fetch API
- localStorage

---

##  Design Pattern

This project uses the Module Pattern for code organization:

- api.js → API communication
- ui.js → UI rendering
- events.js → Event listeners
- storage.js → Local storage handling
- app.js → App initialization

---

##  Setup Instructions

1. Clone the repository
2. Open js/config.js
3. Add your OMDb API key:

```js
export const API_KEY = 'YOUR_API_KEY';
