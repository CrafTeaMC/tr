function Person(pImg, name, rol) {
  this.pImg = pImg;
  this.name = name;
  this.rol = rol;
}

const personListesi = [
  new Person("./img/256.png", "3geE", "KOMUTÇU"),
  new Person("./img/256 (1).png", "TPCOFFLINE", "KOMUTÇU"),
  new Person("./img/256 (2).png", "EGEMENTONI0922", "KOMUTÇU"),
  new Person("./img/256 (3).png", "ZIARNOX", "BUILDCI"),
  new Person("./img/256 (4).png", "CLOUDY SHERLOCK", "BUILDCI"),
  new Person("./img/256 (3).png", "YUNUSSW", "BUILDCI"),
  new Person("./img/256 (5).png", "MARCH", "MODELCI"),
  new Person("./img/256 (3).png", "YEIX", "PIXEL ARTIST"),
];

function kisiGetir() {
  for (let i = 0; i < personListesi.length; i++) {
    const box = document.createElement("div");
    personContainer.appendChild(box);
    box.classList.add("d-grid", "personBox", "col-lg-3", "col-md-4");
    const boxImg = document.createElement("div");
    boxImg.classList.add("text-center", "mb-1");
    box.appendChild(boxImg);
    const boxText = document.createElement("div");
    boxText.classList.add("boxText");
    box.appendChild(boxText);

    boxImg.innerHTML = `<img src="${personListesi[i].pImg}" alt="" class="map-show-img">`;
    boxText.innerHTML = ` <h3>${personListesi[i].name}</h3> <h3>${personListesi[i].rol}</h3>`;
  }
}

kisiGetir();
