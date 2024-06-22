let quotes = [
  {
    author: "albert",
    content:
      "life is like riding a bicycle to keep your balance you must keep moving",
  },
  { author: "mark", content: "think deeply act wisely" },
  { author: "ahmed", content: "start today achieve more" },
  { author: "eslam", content: "spread love spread joy" },
  { author: "salma", content: "stay strong never quit" },
];
let content = document.getElementById("content");
let author = document.getElementById("author");
let last = -1;
function next() {
  let random;
  do {
    random = Math.floor(Math.random() * quotes.length);
  } while (random === last);
  content.innerText = quotes[random].content;
  author.innerText = `author is: ${quotes[random].author}`;
  last = random;
}
