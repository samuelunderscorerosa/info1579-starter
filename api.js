export const displayJoke = async () => {
  const container = document.getElementById("jokeContainer");

  if (!container) {
    return;
  }

  try {
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    if (!response.ok) {
      throw new Error("Joke request failed");
    }

    const data = await response.json();
    container.innerHTML = `<p>${data.setup}</p><p><strong>${data.punchline}</strong></p>`;
  } catch {
    container.textContent = "Joke unavailable right now.";
  }
};

export const displayQuote = async () => {
  const container = document.getElementById("quoteContainer");

  if (!container) {
    return;
  }

  try {
    const response = await fetch("https://dummyjson.com/quotes/random");

    if (!response.ok) {
      throw new Error("Quote request failed");
    }

    const data = await response.json();
    container.innerHTML = `<p>"${data.quote}"</p><p><em>- ${data.author}</em></p>`;
  } catch {
    container.textContent = "Quote unavailable right now.";
  }
};
