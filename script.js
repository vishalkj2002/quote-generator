const quoteText = document.getElementsByClassName("quote")[0];
const authorName = document.getElementsByClassName("name")[0];
const quoteButton = document.getElementsByClassName("new-quote")[0];
const soundButton = document.getElementsByClassName("sound")[0];
const copyButton = document.getElementsByClassName("copy")[0];
const xButton = document.getElementsByClassName("x")[0];

async function randomQuote() {
  quoteButton.classList.add("loading");
  quoteButton.textContent = "Loading Quote...";
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
    quoteButton.textContent = "New Quote";
    quoteButton.classList.remove("loading");
  } else {
    quoteText.textContent = "Failed to fetch quote";
  }
}

soundButton.addEventListener("click", () => {
  let utterance = new SpeechSynthesisUtterance(
    `${quoteText.textContent} by ${authorName.textContent}`
  );
  speechSynthesis.speak(utterance);
});

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(quoteText.textContent);
});

xButton.addEventListener("click", () => {
  let tweetUrl = `https://x.com/intent/tweet?url=${quoteText.textContent}`;
  window.open(tweetUrl, "_blank");
});
