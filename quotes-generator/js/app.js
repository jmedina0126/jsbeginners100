//immediate invoked function expression
(function() {
  const quotes = [
    {
      quote:
        "The real world is a jungle, not a playground, and nobody gets anything they dont deserve!",
      author: "Kiryu, Yakuza 0"
    },
    {
      quote:
        "Humor is richly rewarding to the person who employs it. It has some value in gaining and holding attention. But it has no persuasive value at all",
      author: "John Kenneth Galbraith"
    },
    {
      quote:
        "God save me from my friends. I can protect myself from my enemies.",
      author: "Claude Louis Hector de Villars "
    },
    {
      quote: "The price of anything is the amount of life you exchange for it.",
      author: "David Thoreau"
    },
    {
      quote:
        "Life is like a landscape. You live in the midst of it but can describe it only from the vantage point of distance. ",
      author: "Charles Lindbergh"
    },
    {
      quote:
        "A critic is someone who never actually goes to the battle, yet who afterwards comes out shooting the wounded.",
      author: " Tyne Daly"
    }

  ];


  // Get DOM
  const btn = document.querySelector('#generate-btn');
  const text = document.querySelector('#quote');
  const author = document.querySelector('.author');

  // Event
  btn.addEventListener('click', function() {

    let index = Math.floor(Math.random() * quotes.length);
    text.innerText = quotes[index].quote;
    author.innerText = quotes[index].author;
  })

})();
