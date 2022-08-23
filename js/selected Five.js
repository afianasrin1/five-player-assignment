const selectAllButton = document.querySelectorAll(".select-button");
for (select of selectAllButton) {
  select.addEventListener("click", function (event) {
    event.target.disabled = true;
    event.target.style.background = "orange";
    const name = event.target.parentNode.parentNode.children[0].innerText;
    const playerObject = {
      playerName: name,
    };
    nameArray.push(playerObject);
    selectPlayer(nameArray);
  });
}
const nameArray = [];
function selectPlayer() {
  const playerAdded = document.getElementById("player-added");
  playerAdded.innerHTML = "";
  for (let i = 0; i < array.length; i++) {
    const name = nameArray[i].playerName;
    const playerNumber = i;
    if (i < 5) {
      const tr = document.createElement("tr");
      tr.HTML = `<li>${name}</li>`;
      playerAdded.appendChild(tr);
    } else {
      alert("You cannot add more than 5 player");
      return playerNumber;
    }
    document.getElementById;
  }
}
