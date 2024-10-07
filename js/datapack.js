function Map(mapImg, mapText, mapLink, tittle) {
  this.mapImg = mapImg;
  this.mapText = mapText;
  this.mapLink = mapLink;
  this.tittle = tittle;
}

const mapListesi = [
  new Map(
    "./img/agacdevrilme.png",
    "Bu datapack, Minecraft 1.20+ sürümlerinde, kestiğiniz ağacın kökünden başlayarak animasyonlu bir şekilde yıkılmasını sağlar. Ağaç kırıldığında tüm eşyaları düşer. Not: Şuan sadece 'orta ve küçük ' meşe ağaçlarında çalışmaktadır.",
    "https://download1324.mediafire.com/69iutfmvwclg_f8Ujj-BSOQ1Lrnit0G9uYcj9d0uoG4ELVYPFXbuk316xRinVTnLUKs14gsCnRZDTKT6OC9h5mDfE6bPo7wfPvuL69g8f-XGjEdRKIX8zjOr3U0wZDTj0bGbFulYt52nz2Vb99STHB-rYRC84EIx7F7oSxxFd9U/e1wfc0hsf5fw932/A%C4%9Fa%C3%A7+Devrilme+%281%29+%281%29.rar",
    "TreeCapitator"
  ),
];

function mapGetir() {
  for (let i = 0; i < mapListesi.length; i++) {
    const box = document.createElement("div");
    mapContainer.appendChild(box);
    box.classList.add("row", "align-items-center", "map");
    const boxImg = document.createElement("div");
    boxImg.classList.add("col-lg-4", "col-md-12");
    box.appendChild(boxImg);
    const boxText = document.createElement("div");
    boxText.classList.add("col-lg-6", "col-md-12");
    box.appendChild(boxText);
    const boxLink = document.createElement("a");
    boxLink.classList.add("col-lg-2", "col-md-12");
    box.appendChild(boxLink);

    boxImg.innerHTML = `<h3> ${mapListesi[i].tittle} </h3> <img src="${mapListesi[i].mapImg}" alt="" class = "map-show-img"> `;
    boxText.innerHTML = `<p>${mapListesi[i].mapText}</p>`;
    boxLink.innerHTML = ` <a href="${mapListesi[i].mapLink}">İndir</a>`;
  }
}

mapGetir();
