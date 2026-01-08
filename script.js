fetch("data/spawns.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("pokemon-list");

    data.forEach(pokemon => {
      const div = document.createElement("div");
      div.className = "pokemon";
      div.innerHTML = `
        <h3>${pokemon.name}</h3>
        <p>PvP: ${pokemon.pvp}</p>
        <p>PvE: ${pokemon.pve}</p>
      `;
      container.appendChild(div);
    });
  });
