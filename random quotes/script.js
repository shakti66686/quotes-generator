let random = "";
let newData = "";

let quotes = document.querySelector(".h6");
let author = document.querySelector(".author_name");
let next_btn = document.querySelector(".btn");
next_btn.addEventListener("click", function () {
  getQuotes();
});

function randomQotes() {
  let random = Math.floor(Math.random() * 10);
  quotes.innerHTML = `"${newData[random].text}"`;
  author.innerHTML = `-${newData[random].author}`;
  console.log(newData[random]);
}

let getQuotes = async () => {
  let apiKey = "https:/type.fit/api/quotes";
  try {
    let data = await fetch(apiKey);
    newData = await data.json(random);
    let newestData = randomQotes(newData);
    return newestData;
  } catch (error) {}
};
getQuotes();
