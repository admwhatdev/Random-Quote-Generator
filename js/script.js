/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote:"Before you marry a person, you should first make them use a computer with slow Internet to see who they really are.",
    source: "Will Ferrel"
  },
  {
    quote:"I used to sell furniture for a living. The trouble was, it was my own.",
    source: "Les Dawson"
  },
  {
    quote:"I never feel more alone than when I'm trying to put sunscreen on my back.",
    source: "Jimmy Kimmel"
  },
  {
    quote:"I'm not good at the advice. Can I interest you in a sarcastic comment?",
    source: "Chandler (Matthew Perry)",
    citation: "Friends",
    year: 2002
  },
  {
    quote:"I never forget a face - but in your case, I'll be glad to make an exception",
    source: "Groucho Marx",
    year: 1941
  }
];

/***
 * `getRandomQuote` function
***/

let quoteHtml = '';
function getRandomQuote() {
  let quoteNumber = Math.floor(Math.random() * quotes.length );
return quoteNumber;
  };

 
/***
 * `printQuote` function
***/
function printQuote() {

  let quoteInfo = quotes[getRandomQuote()];
  
let quoteHtml = '';

  if (!quoteInfo.citation  && !quoteInfo.year) {
    quoteHtml += `
      <p class="quote">${quoteInfo.quote}</p>
      <p class ="source">${quoteInfo.source}</p>
    `;
  } else if (quoteInfo.year && !quoteInfo.citation ){
    quoteHtml += `
    <p class="quote">${quoteInfo.quote}</p>
    <p class="source">${quoteInfo.source} 
      <span class="year">${quoteInfo.year}</span>
    </p>
    `
  } else if (quoteInfo.citation && !quoteInfo.year){
    quoteHtml += `
    <p class="quote">${quoteInfo.quote}</p>
    <p class="source">${quoteInfo.source} 
      <span class="citation">${quoteInfo.citation}</span>
    </p>
    `
  } else {
    quoteHtml += `
    <p class="quote">${quoteInfo.quote}</p>
    <p class="source">${quoteInfo.source} 
      <span class="citation">${quoteInfo.citation}</span>
      <span class="year">${quoteInfo.year}</span>
    </p>
    `
  }
  return document.getElementById('quote-box').innerHTML = `${quoteHtml}`; 
 }
  ;

  printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);