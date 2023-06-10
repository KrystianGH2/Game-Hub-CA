import { menuBtn } from "./js/helper-functions.js";
import { apiKey } from "./js/apikey.js";

// const apiKey = import.meta.env.VITE_API_KEY;

const options = {
  method: "GET",
  headers: { Authorization: `Bearer ${apiKey}` },
};

const baseUrl = "appgkLQCE6lvZLEih";
const url = `https://api.airtable.com/v0/${baseUrl}/gameHub/`;

async function fetchUrl() {
  try {
    const data = await fetch(url, options);
    const response = await data.json();
    console.log(response.records);

    let games = response.records;

    games.forEach((game) => {
      const gameInfo = game.fields;
      console.log(gameInfo);

      const gameImage = gameInfo.image[0].thumbnails.large.url;
      const gameTitle = gameInfo.name;
      const gamePrice = gameInfo.price;
      let gameRating = gameInfo.rating;

      const gamesItems = document.querySelector(".gamesItems");
      let star = "⭐"

      switch (gameRating) {
        case 1:
          star = "⭐";
          break;
        case 2:
          star = "⭐⭐";
          break;
        case 3:
          star = "⭐⭐⭐";
          break;
        case 4:
          star = "⭐⭐⭐⭐";
          break;
        case 5:
          star = "⭐⭐⭐⭐⭐";
          break;
        default:
          star = "";
      }


      gameRating = star

      gamesItems.innerHTML += `
      <div class="games">
      <img class="gameImages" src="${gameImage}" alt="">

      <div class="gameInfo">
      <small class="gameRating">${gameRating}</small>
        <p class="gameTitle">${gameTitle}</p>
        <p class="gamePrice">NOK ${gamePrice} </p>
        <button class="add2cart">Add to cart</button>
      </div>
    </div>`;
    });
  } catch (err) {
    console.log(err);
  }
}

fetchUrl();
