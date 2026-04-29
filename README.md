#  MovieVault

MovieVault is a browser-based JavaScript application that allows users to search for movies using the OMDb API, view detailed information in a modal, and manage a personal favorites list stored in localStorage.

---

##  Features

-  Search movies using OMDb API
-  View movie details in a modal popup
-  Add/remove favorites (stored locally)
-  Persistent favorites using localStorage
-  Enter key support for search
-  Loading state during API calls
-  Error handling for API and input validation

---

##  Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript (ES6+)
- Fetch API (async/await)
- localStorage

---

##  Architecture (Design Pattern)

This project uses the **Module Pattern**:

- `api.js` → API communication
- `ui.js` → DOM rendering & UI logic
- `events.js` → Event handling
- `storage.js` → Local data management
- `app.js` → Application entry point

---

##  Installation

1. Clone the repository
2. Open `config.js` and add your OMDb API key:

```js
export const API_KEY = "YOUR_REAL_API_KEY";
