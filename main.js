import { renderMenuItems, renderbuttons } from "./scripts/ui.js";

// html den gelenler
const buttonsArea = document.getElementById("buttons");
const menuList = document.querySelector("#menu-list");

//sayfanın yükleme alanını izleme

document.addEventListener("DOMContentLoaded", () => {
  fetchMenu();
  renderbuttons();
});

//datayı global scope da tanımlama
let data;

//menü verilerini json dosyasından çeker
async function fetchMenu() {
  const res = await fetch("./db.json");
  data = await res.json();
  console.log(data.menu);
  renderMenuItems(data.menu, menuList);
}

//tıklanılan kategory belirleme
buttonsArea.addEventListener("click", (e) => {
  if (e.target.id !== "buttons") {
    console.log(e.target.innerText);

    renderbuttons(e.target.innerText);
    //seçili katagoriye erişme
    const selected = e.target.dataset.category;

    if (selected === "all") {
        //filtreleme yapma api dan gelen verileri ekrana basma
        renderMenuItems(data.menu,menuList)
      //filtreleme yapma
    } else {
      //seçili katagoriye göre filtrele
      const filtred = data.menu.filter((i) => i.category === selected);
      //filtrelenmiş veriyi ekrana bas
      renderMenuItems(filtred,menuList);
    }
  }
});
