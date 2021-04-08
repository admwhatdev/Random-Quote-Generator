/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

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
    year: 2002,
    shirt: 'Blue'
  },
  {
    quote:"I never forget a face - but in your case, I'll be glad to make an exception",
    source: "Groucho Marx",
    year: 1941
  }
];

//  I have created the getRandomQuote() function to get the object from the array.
// The variable randomNum is resposible for creating a random number between 1 and the total sum of quotes.
//  unstructuredQuote then uses that random number to generate a random quote. 
//  The function then returns a quote.
function getRandomQuote() {
  let randomNum = Math.floor(Math.random() * quotes.length) ;
  let unstructuredQuote = quotes[randomNum];
  return unstructuredQuote;
};
 
// The printQuote() function stores getRandomQuote() in a variable. 
// the html variable is used to cocatinate the strings depending on whether the quotes have a citation or year
// This information is then used to construct the final output
function printQuote() {
  let randomQuote = getRandomQuote();
  let html = `
    <p class="quote">${randomQuote.quote}</p>
    <p class="source">${randomQuote.source}`
  
    if (randomQuote.citation) {
      html += `
      <span class="citation">${randomQuote.citation}</span>`
    };
    if (randomQuote.year) {
      html += `
      <span class="year">${randomQuote.year}</span>`
    };
    if (randomQuote.shirt) {
      html += `
      <span class="shirt">${randomQuote.shirt}</span>`
    };
      html += `</p>`;
      return document.getElementById('quote-box').innerHTML = html;
};

//  As I wanted truly random colors rather than pre-determined I created 3 variables: r,g,b.
//  To implement this in my script I did research and came across the article below which helped:
// https://www.kirupa.com/html5/setting_css_styles_using_javascript.htm
function bgColor() {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let getBody= document.querySelector('body');
  let randomColor =  getBody.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  return randomColor;
}

// I have then called the functions 
printQuote();
bgColor();

//I have included an interval which refreshes the screen every 10 seconds
//This was researched from Youtube videos and Stack Overflow: 
//https://stackoverflow.com/questions/32913226/auto-refresh-page-every-30-seconds
setInterval(function(){
  window.location.reload();
}, 10000);

//I want the background color to change when #load-quote button is clicked so have added an additional event listener.
document.getElementById('load-quote').addEventListener("click", bgColor, false);
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);