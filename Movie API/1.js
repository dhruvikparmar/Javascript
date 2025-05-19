// slider
let slides = document.querySelectorAll(".slide");
let slider = document.getElementById("slider");
let slideindex = 0;
function automatic() {
  slideindex++;
  if (slideindex >= slides.length) {
    slideindex = 0;
  }
  slider.style.transform = `translateX(-${slideindex * 100}%)`;
}
setInterval(automatic, 2000);


let obj={
  "Title": "Guardians of the Galaxy Vol. 2",
  "Year": "2017",
  "Rated": "PG-13",
  "Released": "05 May 2017",
  "Runtime": "136 min",
  "Genre": "Action/Adventure/Comedy",
  "Director": "James Gunn",
  "Writer": "James Gunn, Dan Abnett, Andy Lanning",
  "Actors": "Chris Pratt, Zoe Saldaña, Dave Bautista",
  "Plot": "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father, the ambitious celestial being Ego.",
  "Language": "English",
  "Country": "United States",
  "Awards": "Nominated for 1 Oscar. 15 wins & 60 nominations total",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNWE5MGI3MDctMmU5Ni00YzI2LWEzMTQtZGIyZDA5MzQzNDBhXkEyXkFqcGc@._V1_SX300.jpg",
  "Ratings": [
    {
      "Source": "Internet Movie Database",
      "Value": "7.6/10"
    },
    {
      "Source": "Rotten Tomatoes",
      "Value": "85%"
    },
    {
      "Source": "Metacritic",
      "Value": "67/100"
    }
  ],
  "Metascore": "67",
  "imdbRating": "7.6",
  "imdbVotes": "792,363",
  "imdbID": "tt3896198",
  "Type": "movie",
  "DVD": "N/A",
  "BoxOffice": "$389,813,101",
  "Production": "N/A",
  "Website": "N/A",
  "Response": "True"
}

localStorage.setItem("student",JSON.stringify([obj]));
let main=document.getElementById("main");
function moviecard() {
  let alldata = JSON.parse(localStorage.getItem("student"));
  alldata.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");

    let img = document.createElement("img");
    img.src = item.Poster;
    img.classList.add("poster");

    let title = document.createElement("h2");
    title.innerText = item.Title;

    let details = document.createElement("div");
    details.classList.add("details");

    let keysToShow = [
      "Year", "Rated", "Released", "Runtime", "Genre", "Director",
      "Writer", "Actors", "Language", "Country", "Awards",
      "Metascore", "imdbRating", "imdbVotes", "BoxOffice", "Type"
    ];

    keysToShow.forEach(key => {
      let p = document.createElement("p");
      p.innerHTML = `<strong>${key}:</strong> ${item[key]}`;
      details.appendChild(p);
    });

    // Ratings (Array)
    let ratingSection = document.createElement("div");
    ratingSection.classList.add("ratings");
    let ratingTitle = document.createElement("h3");
    ratingTitle.innerText = "Ratings:";
    ratingSection.appendChild(ratingTitle);
    item.Ratings.forEach(r => {
      let rP = document.createElement("p");
      rP.innerHTML = `<strong>${r.Source}:</strong> ${r.Value}`;
      ratingSection.appendChild(rP);
    });

    // Append all to card
    card.append(img);
    card.append(title);
    card.append(details);
    card.append(ratingSection);

    main.append(card);
  });
}
moviecard();
