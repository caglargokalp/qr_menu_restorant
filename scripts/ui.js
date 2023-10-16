import { buttonData } from "./constants.js";

//ekrana menu elemeanlarını basar

const buttonArea = document.getElementById("buttons");

export function renderMenuItems(menuItems, menuList) {
  //dizideki her bir eleman için
  //bir menü htmli oluşturup bunu ekrana basar

  menuList.innerHTML = menuItems
    .map(
      (item) => `
    
    <a id="card" href="/detail.html?id=${item.id} " class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3">
            <img class="rounded shadow img-fluid" src=" ${item.img} " alt="">
            <div>
                <div class="d-flex justify-content-between">
                    <h5> ${item.title} </h5>
                    <p class="text-success fw-bold"> ${item.price} $</p>
                </div>
                <p class="lead"> ${item.desc.slice(0, 80) +'...'}
                </p>


            </div>


        </a>
    
    
    `
    )
    .join(" ");
}

//ekrana butonları basar

export function renderbuttons(active) {
  //eski butonları temizler
  buttonArea.innerHTML = " ";
  //yeni butunları oluşturma
  buttonData.forEach((btn) => {
    //buton elementi oluşturma
    const buttonEle = document.createElement("button");
    //class belirleme
    buttonEle.className = "btn btn-outline-dark";

   //data-id belirleme
   buttonEle.dataset.category =btn.value;

    //eğer ki eleman active ise bu classı ver
    if (btn.text === active) {
      buttonEle.classList.add("btn-dark","text-white");
    }

    //içindeki yazıyı belirleme
    buttonEle.innerText = btn.text;
    //butone html e  gönderme
    buttonArea.appendChild(buttonEle);
  });
}
