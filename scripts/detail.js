//url deki parametrelerin yönetebilmekl içim
//yerkleşik bir js classı bulunuyor
//URLSearchParams

const params = new URLSearchParams(location.search);
//js class'ını sağladığı get methodu ile parametreye erişim sağlar

const paramId = params.get("id");

document.addEventListener("DOMContentLoaded", async () => {
  const res = await fetch("../db.json");
  const data = await res.json();

  //url deki id ye denk gelen elemı bulma

  const product = data.menu.find((i) => i.id === Number(paramId));
  
  
  renderPage(product)
});

const outlet =document.querySelector('#outlet');

//bütün arayüzü ekrana basar

function renderPage(product){
console.log(product)
outlet.innerHTML =`
<div class=" d-flex justify-content-between fs-5">
            <a href="/"><img   style="width: 40px;"  src="/images/pngwing.com.png" alt=""></a>
            <div>anasayfa/${product.category} /${product.title} </div>
        </div>
        <h1 class="text-center my-3 shadow rounded p-2"> ${product.title} </h1>
        
            <img src=" ${product.img} " class="rounded object-fit-cover shadow-lg">
        

    <h3 class="mt-4">
        Ürün Katagorisi : <span class="text-success"> ${product.category}  </span></h3>

    <h3 class="my-2">
        Ürün Fiyatı : <span class="text-success">${product.price}$ </span></h3>



    <p class="lead fs-3">${product.desc} </p>
    </div>






`
}