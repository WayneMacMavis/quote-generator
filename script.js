const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

// Get quote from API
async function getQuote() {
    const proxyUrl = 'http://cors-anywhere.herokuapp.com/';
    const apiUrl = 'http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    // If author is blank add unknown
    try {
    const response = await fetch(proxyUrl + apiUrl);
    const data = await response.json();
    if (data.quoteAuthor = '') {
        authorText.innerText = data.quoteAuthor;
    } else {
        quoteText.innerText = data.quoteText;
    }
} catch(error) {
        getQuote();
        
    }
}

// On load
getQuote();