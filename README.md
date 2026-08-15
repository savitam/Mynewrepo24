Random Joke Generator

This is a tiny static demo that fetches a random joke from the external API at https://icanhazdadjoke.com/.

Files added:
- index.html — simple UI
- script.js — client-side fetch logic

Usage:
- Open index.html in a browser (double-click or `open` it).
- Click "Get Joke" to fetch a joke.

Notes and troubleshooting:
- The demo uses the public icanhazdadjoke API which supports CORS. If you see network or CORS errors, try opening the page from a local static server instead of the file:// protocol (for example: `npx http-server` or `python -m http.server`).
- To switch to another jokes API, update the fetch URL in script.js and adjust headers/parsing accordingly.

License: MIT
