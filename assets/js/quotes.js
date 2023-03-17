// Array of quotes and authors
      const quotes = [
        {
            quote: "The biggest risk of all is not taking one.",
            author: "Mellody Hobson"
            },
            {
            quote: "Compound interest is the eighth wonder of the world. He who understands it, earns it. He who doesn’t, pays it.",
            author: "Albert Einstein"
            },
            {
            quote: "I suppose my formula might be: Dream, diversify and never miss an angle.",
            author: "Walt Disney"
            },
            {
            quote: "With a good perspective on history, we can have a better understanding of the past and present, and thus a clear vision of the future.",
            author: "Carlos Slim Helu"
            },
            {
            quote: "An investment in knowledge pays the best interest.",
            author: "Benjamin Franklin"
            },
            {
            quote: "The stock market is a device for transferring money from the impatient to the patient.",
            author: "Warren Buffett"
            },
            {
            quote: "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
            author: "Thomas Edison"
            },
            {
            quote: "The only limit to our realization of tomorrow will be our doubts of today.",
            author: "Franklin D. Roosevelt"
            },
            {
            quote: "The circulation of confidence is better than the circulation of money.",
            author: "James Madison"
            },
            {
            quote: "Never depend on a single income, make an investment to create a second source.",
            author: "Warren Buffett"
            },
            {
            quote: "Do not save what is left after spending but spend what is left after saving.",
            author: "Warren Buffett"
            },
            {
            quote: "Do not put all your eggs in one basket.",
            author: "Warren Buffett"
            },
            {
            quote: "Never test the depth of the river with both of your feet.",
            author: "Warren Buffett"
            },
            {
            quote: "I made my first investment at age eleven. I was wasting my life until then.",
            author: "Warren Buffett"
            },
            {
            quote: "The way to get started is to quit talking and begin doing.",
            author: "Walt Disney"
            },
            {
            quote: "Every decade or so, dark clouds will fill the economic skies, and they will briefly rain gold.",
            author: "Warren Buffett"
            },
            {
            quote: "I will tell you how to become rich. Close the doors. Be fearful when others are greedy. Be greedy when others are fearful.",
            author: "Warren Buffett"
            },
            {
            quote: "I don’t look to jump over seven-foot bars; I look around for one-foot bars that I can step over.",
            author: "Warren Buffett"
            },
            {
            quote: "To be a successful business owner and investor, you have to be emotionally neutral to winning and losing Winning and losing are just part of the game.",
            author: "Robert Kiyosaki"
            },
            {
            quote: "The philosophy of the rich and the poor is this: the rich invest their money and spend what is left. The poor spend their money and invest what is left.",
            author: "Robert Kiyosaki"
            },
            {
            quote: "Don’t work for money; make it work for you.",
            author: "Robert Kiyosaki"
            },
            {
            quote: "If you do not know how to care for money, money will stay away from you.",
            author: "Robert T. Kiyosaki"
            },
            {
            quote: "It’s not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.",
            author: "Robert Kiyosaki"
            },
            {
            quote: "A good man leaves an inheritance to his children’s children.",
            author: "King Solomon"
            },
            {
            quote: "Behind every stock is a company. Find out what it’s doing.",
            author: "Peter Lynch"
            },
            {
            quote: "All you need for a lifetime of successful investing is a few big winners, and the pluses from those will overwhelm the minuses from the stocks that don’t work out.",
            author: "Peter Lynch"
            },
            {
            quote: "Know what you own, and know why you own it.",
            author: "Peter Lynch"
            },
            {
            quote: "Everyone wants a piece of land. It’s the only sure investment, it can never depreciate like a car or a washing machine.",
            author: "Russell Sage"
            },
            {
            quote: "In any investment, you expect to have fun and make money.",
            author: "Michael Jordan"
            },
            {
            quote: "Invest in yourself, you can afford it, trust me.",
            author: "Rashon Carraway"
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
