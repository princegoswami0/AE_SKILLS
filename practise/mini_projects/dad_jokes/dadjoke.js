const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#get-joke");

async function generateJoke() {
  joke.textContent = "Loading...";

  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/dadjokes",
      {
        headers: {
          "X-Api-Key": "YOUR_API_KEY_HERE"
        }
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();

    // Defensive validation
    if (!Array.isArray(data) || !data[0] || !data[0].joke) {
      throw new Error("Unexpected API response structure");
    }

    joke.textContent = data[0].joke;

  } catch (error) {
    console.error("Joke fetch failed:", error.message);
    joke.textContent = "Unable to fetch joke. Try again.";
  }
}

// Prevent rapid multiple clicks
let isFetching = false;
jokeBtn.addEventListener("click", async () => {
  if (isFetching) return;
  isFetching = true;
  await generateJoke();
  isFetching = false;
});
