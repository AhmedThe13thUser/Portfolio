var wordEle = document.getElementById("Word-Search");
var word = "";
var results = document.querySelector(".results-container");
var Sendbutton = document.querySelector(".search-btn");
var lastword = "||||||||||||||||||||||||||";
const apiUrl = "https://api.api-ninjas.com/v1/rhyme?word=";

const requestOptions = {
  method: "GET",
  headers: { "X-Api-Key": "k8UXOkwiBEceqwh4lNn+Xg==Fye3LYhWOTIUNsIP" },
  contentType: "application/json",
};

let regex = /^[a-zA-Z]+$/;

const search = () => {
  if (lastword.trim().toUpperCase() == wordEle.value.trim().toUpperCase()) {
    results.classList.add("no-results");
    results.innerHTML = "Sorry, You inputed the same word more than once.";
    return;
  }
  if (wordEle.value.trim().toUpperCase() == "") {
    results.classList.add("no-results");
    results.innerHTML = "Please enter a word.";
    return;
  }
  if (!wordEle.value.trim().toLowerCase().match(regex)) {
    results.classList.add("no-results");
    results.innerHTML = "Sorry, only characters from a-z are allowed.";
    lastword = "";
    return;
  }
  Sendbutton.disabled = true;
  setTimeout(() => {
    results.innerHTML = "";
    results.classList.remove("no-results");
    word = wordEle.value;

    fetch(apiUrl + word, requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        lastword = word;
        return response.json();
      })
      .then((data) => {
        if (!data.toString()) {
          console.log(0);
          results.classList.add("no-results");
          results.innerHTML =
            "Sorry, there are no words that rhyme with this word.";
          return;
        }
        Object.keys(data).forEach((key) => {
          const value = data[key];
          let result = document.createElement("div");
          result.classList.add("result-item");
          result.innerHTML = value;
          results.appendChild(result);
        });
      });
    Sendbutton.disabled = false;
  }, 350);
};
