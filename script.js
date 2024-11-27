const quoteText = document.getElementsByClassName("quote")[0];
const authorName = document.getElementsByClassName("name")[0];

async function randomQuote() {
  const apiKey = "vP+wvIBT0T5ujNMw18zDFA==IMb1klh30vZFKilQ";
  const response = await fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: {
      "X-Api-Key": apiKey,
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
