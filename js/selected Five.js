const selectAllButton = document.querySelectorAll(".select-button");
for (select of selectAllButton) {
  select.addEventListener("click", function (event) {
    event.target.disabled = true;
    event.target.style.background = "blue";
    const name = event.target.parentNode.parentNode.children[0].innerText;
    const playerObject = {
      playername: name,
    };
    nameArray.push(playerObject);
    selectPlayer(nameArray);
  });
}
