function Map(mapImg, mapText, mapLink) {
  this.mapImg = mapImg;
  this.mapText = mapText;
  this.mapLink = mapLink;
}

const mapListesi = [
  new Map(
    "./img/image.png",
    "Bu haritada temel amaç, hayatta kaldığınız sürece oyunun kesintisiz devam etmesidir. Ancak dikkatli olun! Eğer bir odada 15 saniyeden uzun süre hayaletle kalırsanız, oyunu kaybedersiniz.", 
    "https://dl.fingermaps.net/map-jam/plant-grandma"
  ),
  new Map(
    "./img/paintball.png",
    "Arkadaşlarınızla hem eğlenip hem de rekabet edebileceğiniz eğlenceli bir harita. En az 2 oyuncu ile oynanabilen bu haritada, takım olarak savaşabilir ve heyecan dolu anlar yaşayabilirsiniz. ",
    "https://download1321.mediafire.com/2dqc89r9kewgyLuqir6NZFHJjD3Jgq99bJy3gS-6vr8yZLkuaHdKsGew3wWqopOO8jHXcBSOAORTevb4OmCWELSdxHEOnvucmv5UzwMKPZLtnCLS5lsnzWyB9ky-f_KqXiQhzoqZm8fqdBLOJr5JmumdQntfQUoi1PKvxusvsrA/9q5rtyyv1hx8uub/paintball-beta-1-1+%282%29.zip"
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

    boxImg.innerHTML = `<img src="${mapListesi[i].mapImg}" alt="" class = "map-show-img">`;
    boxText.innerHTML = `<p>${mapListesi[i].mapText}</p>`;
    boxLink.innerHTML = ` <a href="${mapListesi[i].mapLink}">İndir</a>`;
  }
}

mapGetir();
