(function () {
  //target button element
  const button = document.querySelector("button");
  //target span for the quote
  const quoteText = document.querySelector("#quote");
  //target span tag for author
  const author = document.querySelector(".quote-author");
  const quotes = [
    { quote: "Get busy living or get busy dying.", author: "Stephen King" },
    {
      quote:
        "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
      author: "Eleanor Roosevelt",
    },
    {
      quote: "Those who dare to fail miserably can achieve greatly.",
      author: "John F. Kennedy",
    },
    {
      quote:
        "I'm a success today because I had a friend who believed in me and I didn’t have the heart to let him down.",
      author: "Abraham Lincoln",
    },
    {
      quote:
        "Let us always meet each other with smile, for the smile is the beginning of love.",
      author: "Mother Teresa",
    },
  ];

  //add a click event to the button
  button.addEventListener("click", () => {
    //create a variable and iterate through the array
    const random = Math.floor(Math.random() * quotes.length);
    //output the quote and author object to the ui
    quoteText.textContent = quotes[random].quote;
    author.textContent = quotes[random].author;
  });
})();
