//1
const buttButton = document.getElementById("butt");
buttButton.onclick = () =>
    alert ("Cogratulation! You made it!)");
//2
function addSpanToPage(text) {
    const span = document.createElement('span');
    span.innerHTML = text;
    document.body.appendChild(span);
  }
  addSpanToPage('Hello my dear friends!');

  