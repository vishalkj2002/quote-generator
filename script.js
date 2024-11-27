const quoteText = document.getElementsByClassName("quote")[0];
const authorName = document.getElementsByClassName("name")[0];

async function randomQuote() {
  const API_KEY = process.env.API_KEY;
  const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: {
      "X-Api-Key": API_KEY,
    },
  });

  if (response.ok) {
    const data = await response.json();
    quoteText.textContent = data[0].quote;
    authorName.textContent = data[0].author;
  } else {
    quoteText.textContent = "Failed to fetch quote";
  }
}
