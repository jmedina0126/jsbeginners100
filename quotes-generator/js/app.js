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
        "We all make choices, but in the end, our choices make us. A man chooses, a slave obeys.",
      author: "Andrew Ryan, Bioshock"
    },
    {
      quote:
        "Stand in the ashes of a trillion dead souls and ask the ghosts if honor matters. The silence is your answer.",
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
        "Replace the fear of the unknown with curiosity.",
      author: ""
    },
    {
      quote:
        "The path of the warrior; train your mind and your body will follow.",
      author: "Dennis, Far Cry 3"
    },
    {
      quote:
        "There are two things I hate; waiting and being rushed. And what do you know, that's all I've been doing lately",
      author: "Yuu Yuu Hakusho"
    },
    {
      quote:
        "My mother drew a distinction between achievment and success. She said that achievment is the knowledge that you have studied and worked hard and done the best that's in you. Success is being praised by others, and that's nice too, but not as important or satisfying. Always aim for achievement and forget success.",
      author: "Helen Hayes"
    },
    {
      quote:
        "Some men see things ass they are and ask why. Others dream things that never were and ask why not.",
      author: "George Bernard Shaw"
    },
    {
      quote:
        "We could never learn to be brave or patient if there were only joy in the world.",
      author: "Helen Keller"
    },
    {
      quote:
        "Be more concerned with your character than your reputation, because your character is what you really are, while your reputation is merely what others think you are.",
      author: "Dale Carnegie"
    },
    {
      quote:
        "Humility is not thinking less of yourself, it is thinking of yourself less.",
      author: "C.S Lewis"
    },
    {
      quote:
        "To be old and wise you must first be young and stupid.",
      author: "Anonymous"
    },
    {
      quote:
        "A wise person knows that there is something to be learned from everyone.",
      author: "Anonymous"
    },
    {
      quote:
        "Imagination is more important than knowledge. For knowledge is limited to all we now know and understand, while imagination embraces the entire wirld, and all there ever will be to know and understand.",
      author: "Albert Einstein"
    },
    {
      quote:
        "Point of view is worth 80 IQ points.",
      author: "Alan Kay"
    },
    {
      quote:
        "What I want to know isn't a shortcut...but how to navigate the rugged and steep path.",
      author: "Naruto, Shippuden episode 391"
    },
    {
      quote:
        "Don't wish it were easier, wish you were better.",
      author: "Animal crossing"
    },
    {
      quote:
        "It is more important to master the cards you are holding than complain about the ones your opponent were dealt.",
      author: "Grimsley, Pokemon Trding Card Game"
    },
    {
      quote:
        "I dont worry about my actions, only my inaction.",
      author: "Winston Churchill"
    },
    {
      quote:
        "I may be bested in battle, but I will never be defeated.",
      author: "Dakkon, Planescape Torment"
    },
    {
      quote:
        "Endure, in enduring grow strong.",
      author: "Dakkon, Planescape Torment"
    },
    {
      quote:
        "Sit down? I will eventually get up, so what's the point?",
      author: "Fran Bow"
    },
    {
      quote:
        "We will exercise in silence. No headphones either. Music is a crutch",
      author: "Holt, Brooklyn 99"
    },
    {
      quote:
        "Limits are a mindset",
      author: ""
    },
    {
      quote:
        "I don't understand why you call sayians by such mindless names. The only thing it does is reveal your own fear and ignorance. I guess name calling is your only attack, because you're too weak to challenge me any other way.",
      author: "Goku, Dragonball Z"
    },
    {
      quote:
        "Only those who risk going too far can possibly find out how far one can go.",
      author: "T.S Elliot"
    },
    {
      quote:
        "To acquire knowledge one must study, but to acquire wisdom, one must observe.",
      author: "Marilyn Vos Savant"
    },
    {
      quote:
        "And you will succeed! Yes! You will indeed! 98 and 3/4 per cent guaranteed. KID YOU'LL MOVE MOUNTAINS!",
      author: "Dr Seuss, Oh the places you'll go"
    },
    {
      quote:
        "Walking among three people, I find my teacher among them. Choose that which is good in them and follow it, and that which is bad and change it.",
      author: "Confucius"
    },
    {
      quote:
        "Though I walk through the valley of death, I will fear no evil, for I am the evilest motherf*cker in the valley.",
      author: "Alex Garland"
    },
    {
      quote:
        "Try again. Fail again. Fail better.",
      author: "Samuel Beckett"
    },
    {
      quote:
        "Real knowledge is to know the extent of ones ignorance.",
      author: "Confucius"
    },
    {
      quote:
        "Luck is what happens when preperation meets opportunity.",
      author: "Seneca"
    },
    {
      quote:
        "All cruelty springs from weakness.",
      author: "Seneca"
    },
    {
      quote:
        "Begin at once to live, and count each seperate day as a seperate life",
      author: "Seneca"
    },
    {
      quote:
        "Throw me to the wolves and I'll return leading the pack.",
      author: "Seneca"
    },
    {
      quote:
        "As a tale, so is life; not how long it is, but how good it is, is what matters.",
      author: "Seneca"
    },
    {
      quote:
        "Every night before going to sleep, we must ask ourselves: What weakness did I overcome today? What virtue did I acquire?",
      author: "Seneca"
    },
    {
      quote:
        "Difficulties strengthen the mind, as labour does the body",
      author: "Seneca"
    },
    {
      quote:
        "We are always complaining that our days are few, and acting as though there would be no end of them.",
      author: "Seneca"
    },
    {
      quote:
        "It is not because things are difficult that we do not dare; it is because we do not dare that things are difficult.",
      author: "Seneca"
    },
    {
      quote:
        "Man is not affected by events but by the view he takes of them.",
      author: "Seneca"
    },
    {
      quote:
        "You want to live but do you know how to live? You are scared of dying and tell me, is the kind of life you leadreally any different from being dead?",
      author: "Seneca"
    },
    {
      quote:
        "People like to invent monsters and monstrosities. Then they sem less monstrous themselves. When they get blind-drunk, cheat, steal, beat their wives, starve an old woman, when the kill a trapped fox with an axe or riddle the last unicorn with arros, they like to think that the Bane entering cottages at daybreak is more monstrous than they are. They feel better then. They find it easier to live.",
      author: "Geralt of Rivia, The Last Wish"
    },
    {
      quote:
        "Evil is evil, Stragobor. Lesser, greater, middling, it's all the same. Proportions are negotiated, boundries blurred. I'm not a pious hermit, I haven't done only good in my life. But if I'm to choose between one evil and another, then I prefer not to choose at all.",
      author: "Geralt of Rivia, The Last Wish"
    },
    {
      quote:
        "The world is a violent place, Harold. Always will be. The best we can hope to do while we're here is to protect those closest to us.",
      author: "Elias, Person of interest"
    },
    {
      quote:
        "Each possible move represents a different game. A different universe in which you make a better move. By the second move there are 72,084 possible games. By the Third, 9 million. There are more possible games of chess than there are atoms in the universe. No one could possibly predict them all. Which means that, that first move can be terrifying. As the furthest point from the end of the game, theres a virtually infinite sea of possibilities between you and the other side. But it also means that if you make a mistake... there's a nearly infinite amount of ways to fix it. So you should simply relax and play.",
      author: "Harold Finch, Person of Interest"
    },
    {
      quote:
        "What's the point of saving the world if you don't enjoy it?",
      author: "Harold Finch, Person of Interest"
    },
    {
      quote:
        "In another moment down went Alice after it, never once considering how in the world she would get out again.",
      author: "Lewis Carrol, Alice's Adventure in Wonderland"
    },
    {
      quote:
        "Dear, dear! How queer everything is today! And yesterday things went on just as usual. I wonder if I've been changed in the night? Let me think: Was I the same when I got up this morning? I almost think I remember feking a little different. But if I'm not the same, the next question is, who in the world am I? Ah, THAT'S the great puzzle",
      author: "Alice, Alice's Adventure in Wonderland"
    },
    {
      quote:
        "I'm afraid that sometimes you'll play lonely games too. Games that you can't win 'cause you'll play against you.",
      author: "Dr Seus, Oh the places you'll go!"
    },
    {
      quote:
        "How can you live if you're too afraid to die?",
      author: "The Black Angels, Young Man"
    },
    {
      quote:
        "Never going to live if you're too afraid to die.",
      author: "Goo Goo Dolls, I'm so Alive"
    },
    {
      quote:
        "How can the world want me to change when they're the ones that stay the same. They can't tell me who to be, because I'm not what they see.",
      author: "John Rzeznik, I'm Still Here | Treasure Planet"
    },
    {
      quote:
        "The greatest lesson in life is to know that even fools are right sometimes.",
      author: "Winston S. Churchill"
    },
    {
      quote:
        "It is good to have an end to journey towards; but it is the journey that matters in the end.",
      author: "Ursula K. Le Guin"
    },
    {
      quote:
        "Spend a little more time trying to make something of yourself and a little less time trying to impress people.",
      author: "The Breakfast club"
    },
    {
      quote:
        "It's so much easier to teach them to hate than to make them believe.",
      author: "Peter Pan, Once Upon a Time"
    },
    {
      quote:
        "I'm just being me. And you should just keepo being you, it's stupid to talk about all the things that you're not.",
      author: "Shikimaru Nara, Naruto Shippuden"
    },
    {
      quote:
        "A single thank you is more satisfying than a thousand apologies",
      author: "Emilia, Re:Zero"
    },
    {
      quote:
        "I don't know what you're planning on apologizing for, but I'd rather hear a thank you instead. It would be even better if that thank you came with a smile.",
      author: "Subaru, Re:Zero"
    },
    {
      quote:
        "Death is inevitable. Our fear of it makes us play it safe, blocks out emotion. It's a losing game. Without passion, you are already dead.",
      author: "Max Payne"
    },
    {
      quote:
        "It's you! Just the person to answer a question that's been knocking around my mind since our first meeting. Now then, you must tell me: What's the best way of getting you to leave me on a more permenant basis?",
      author: "Novak, Divinity Original Sin"
    },
    {
      quote:
        "It insults the dead when you treat life so carelessly",
      author: "Nameless One, Planescape Torment"
    },
    {
      quote:
        "Well sitting around and worrying about it won't help me at all, so lets stop worrying, Okay! No sense in worrying about things that can't be helped. This is where subarus decisiveness shone.",
      author: "Subaru, Re:Zero"
    },
    {
      quote:
        "How's it harsh? I'm talking about people who languish in this alleyway life and lose the will to even try to get out of here or better themselves some way. I hate losers like that.",
      author: "Felt, Re:Zero"
    },
    {
      quote:
        "The second tiome around, Felt had done everything she could to find weaknesses in and get more out of Elsa and Subaru. It was easy to explain those actions simply by saying she was greedy, but knowing what he did now, Subaru thought he could understand why Felt was so persistant. Felt wanted to leave the slums, to break out of the circumstances of her orphaned childhood. At the root of all her actions was a desire for something more.",
      author: "Re:Zero"
    },
    {
      quote:
        "It's no big deal. I just realised that I was worrying too much about something I didn't need to be worrying about. Of course thats how it is. Of course. I don't know why I was worrying so much.",
      author: "Subaru, Re:Zero"
    },
    {
      quote:
        "Trust your instincts; society has taught you to fail",
      author: "Far Cry 3"
    },
    {
      quote:
        "If you wait for an emergency to happen before you decide what to do, you're already dead.",
      author: "A Perfect Getaway"
    },
    {
      quote:
        "Everyone is equal in the eyes of existence",
      author: ""
    },
    {
      quote:
        "Men must be free to do what they believe. It is not our right to punish one for thinking what they do, no matter how much we disagree. Educate them, teach them right from wrong. It must be knowledge that frees them, not force.",
      author: "Altair, Assassins Creed"
    },
    {
      quote:
        "",
      author: ""
    },
    {
      quote:
        "Some people die at 25 and aren't buried until 75",
      author: "Benjamin Franklin"
    },
    {
      quote:
        "Most people are other people. Their thoughts are someone else's opinions. Their lives a mimicry. Their passions a quotation.",
      author: "Oscar Wilde"
    },
    {
      quote:
        "Great spirits have often encountered violent opposition from mediocre minds.",
      author: "Albert Einstein"
    },
    {
      quote:
        "Don't let schooling intefere with your education",
      author: "Mark Twain"
    },
    {
      quote:
        "Beware that, when fighting monsters, you yourself do not become a monster... for when you gaze long into the abyss. The abyss gazes also into you.",
      author: "Frederich Nietzsche"
    },
    {
      quote:
        "",
      author: ""
    },
    {
      quote:
        "It is no measure of health to be well adjusted to a profoundly sick society.",
      author: "Jiddu Krisnamurti"
    },
    {
      quote:
        "Every man dies, but not every man truly lives",
      author: "William Wallace"
    },
    {
      quote:
        "Have I not destroyed my enemy when I have made him my friend?",
      author: "Abraham Lincoln"
    },
    {
      quote:
        "If you want to build up a ship, don't drum up the men to gather wood, divide the work and give orders. Instead teach them to yearn for the vast and endless sea.",
      author: "Antoine de Saint-Expupery"
    },
    {
      quote:
        "They that can give up essential liberty to obtain a little temporary safety deserve neither liberty nor safety.",
      author: "Benjamin Franklin"
    },
    {
      quote:
        "Only when the last tree has died and the last river has been poisoned and the last fish has been caught will we realize we cannot eat money",
      author: "Indian proverb"
    },
    {
      quote:
        "Try as much as possible to be wholly alive, with all your might, and when you laugh, laugh like hell and when you get angry, get good and angry. Try to be alive. You will be dead soon enough.",
      author: "William Saroyan"
    },
    {
      quote:
        "Do difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.",
      author: "Lao Tzu"
    },
    {
      quote:
        "Man surprises me most in life. Because he sacrifices his health in order to make money. Then he sacrifices his money to recuperate his health. And then he is so anxious about the future that he does not enjoy the present; the result being that he does not live in the present or the future; he lives as if he is never going to die, and then dies having never truly lived.",
      author: "Dalai Llama"
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
