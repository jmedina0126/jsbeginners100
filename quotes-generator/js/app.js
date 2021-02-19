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
    },
    {
      quote:
        "A true measure of a man is not where he stands in the moments of comfort and conveniance, but where he stands at times of challenge and controversy",
      author: "Martin Luther King JR"
    },
    {
      quote:
        "Show respect to people who don't even deserve it; not as a reflection of their character, but as a reflection of yours.",
      author: "Dave Willis"
    },
    {
      quote:
        "Life will always have ups and downs. And if we don't have the bad parts, we'll never appreciate the good ones. I Seeing life through rose-coloured glasses is a choice, not some product you can buy.",
      author: "Kiryu, Yakuza 0"
    },
    {
      quote:
        "We all make choices, but in the end, our choices make us. A man chooses, a slve obeys.",
      author: "Andrew Ryan, Bioshock"
    },
    {
      quote:
        "Stand in the ashes of a trillion dead souls and ask the ghosts id honor matters. The silence is your answer.",
      author: "Javik, Mass Effect"
    },
    {
      quote:
        "Some trees flourish, others die. Some cattle grow strong, others are taken by wolves. Some men are born rich enough and dumb enough to enjoy their lives. Ain't nothing fair.",
      author: "John Marston, Red Dead Redemption"
    },
    {
      quote:
        "You can't break a man the way you break a dog, or a horse. The harder you beat the man, the taller he stands.",
      author: "The Jackal, Far Cry 2"
    },
    {
      quote:
        "",
      author: ""
    },
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
