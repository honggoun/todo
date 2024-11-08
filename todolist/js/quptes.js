const quotes = [
    {
        quote: "희망은 볼 수 없는 것을 보고, 만져질 수 없는 것을 느끼고, 불가능한 것을 이룬다",
        author: "Helen Keller",
    },
    {
        quote: "성공한 사람이 될 수 있는데 왜 평범한 이에 머무르려 하는가?",
        author: "Bertolt Brecht",
    },
    {
        quote: "목표에 도달했을 때 돌아서지 마라",
        author: "Publilius Syrus",
    },
    {
        quote: "돈은 행복이다 약해지지 말아라",
        author: "작자미상",
    },
    {
        quote: "성공은 영원하지 않고, 실패는 치명적이지 않다",
        author: "Mike Ditka",
    },
    {
        quote: "왜 굳이 의미를 찾으려 하는가? 인생은 욕망이지, 의미가 아니다",
        author: "Charlie Chaplin",
    },
    {
        quote: "외로움과 공허함은 아픔이 아니다, 나를 성장시키는 매개체다",
        author: "작자미상",
    },
    {
        quote: "달을 향해 쏴라 빗나가도 별이 될테니",
        author: "Les Brown",
    },
    {
        quote: "성공은 대개 그를 좇을 겨를도 없이 바쁜 사람에게 온다",
        author: "Henry David Thoreau",
    },
    {
        quote: "언제나 현재에 집중할 수 있다면 행복할 것이다",
        author: "Paulo Cuelho",
    },
];

// 수정된 querySelector 코드
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
