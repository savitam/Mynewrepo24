const jokeEl = document.getElementById('joke');
const btn = document.getElementById('getJoke');

btn.addEventListener('click', fetchJoke);

async function fetchJoke() {
  btn.disabled = true;
  const originalLabel = btn.textContent;
  btn.textContent = 'Loading...';

  try {
    // icanhazdadjoke requires Accept: application/json to return JSON
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: { 'Accept': 'application/json' }
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();
    // data.joke contains the joke text
    jokeEl.textContent = data.joke;

  } catch (err) {
    console.error('Failed to fetch joke:', err);
    jokeEl.textContent = 'Sorry — could not fetch a joke. ' + (err.message || '');
  } finally {
    btn.disabled = false;
    btn.textContent = originalLabel;
  }
}
