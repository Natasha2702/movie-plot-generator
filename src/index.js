 function displayPlot(response) {
  new Typewriter("#plot", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePlot(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "e6taed4cb9ef5dfoaff8f35a499504ef";
  let context =
    "You are the best at giving movie plots. You mission is to generate a 4 line plot using HTML. Make sure to follow the user instructions. Include a title to the movie. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a movie plot on ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#plot");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a movie plot about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayPlot);
}

let plotFormElement = document.querySelector("#plot-generator-form");
plotFormElement.addEventListener("submit", generatePlot);