const jokeEl = document.querySelector("#joke");
const btnEl = document.querySelector("#jokeBtn");

const API_KEY = "26560ad9a4mshc3b9319291aafd2p145342jsn7bae5cfacee7";
const API_HOST = "dad-jokes.p.rapidapi.com";
const url = "https://dad-jokes.p.rapidapi.com/random/joke?count=1";

async function generateJoke() {
  const config = { headers: { "Accept": "application/json", "X-RapidAPI-Key": `${API_KEY}`, "X-RapidAPI-Host": `${API_HOST}`} };
  try {
    const data = await fetch(url, config);
    const joke = await data.json();
    // console.log(joke.body[0].setup);
    // console.log(joke.body[0].punchline);
    const setup = joke.body[0].setup;
    const punchline = joke.body[0].punchline;
    jokeEl.innerHTML = `
      <p>${setup}</p>
      <p>${punchline}</p>
    `
  } catch (err) {
    console.log(err);
  }
}

btnEl.addEventListener("click", generateJoke);