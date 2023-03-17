// Array of quotes and authors
      const quotes = [
        {
          quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
          author: "Nelson Mandela"
        },
        {
          quote: "The way to get started is to quit talking and begin doing.",
          author: "Walt Disney"
        }
      ];

      const quoteBox = document.querySelector('#quote-box');
const quote = document.querySelector('#quote');

quoteBox.style.padding = '20px';
quoteBox.style.width = '600px';
quoteBox.style.margin = '0 auto';
quoteBox.style.textAlign = 'center';
quoteBox.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px';

quote.style.fontStyle = 'italic';

const mediaQuery = window.matchMedia('(max-width: 768px)');
if (mediaQuery.matches) {
  quoteBox.style.width = '90%';
}

      // Function to get a random quote
      function getRandomQuote() {
        let quoteIndex = Math.floor(Math.random() * quotes.length);
        return quotes[quoteIndex];
      }

      // Function to display the quote
      function displayQuote() {
        let quoteObj = getRandomQuote();
        let quoteText = quoteObj.quote;
        let authorText = "- " + quoteObj.author;
        document.getElementById("quote").textContent = quoteText;
        document.getElementById("author").textContent = authorText;
      }

      // Display a random quote on page load
      displayQuote();
