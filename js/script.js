function toggleMenu() {
  const navbar = document.querySelector(".navBarList");
  navbar.classList.toggle("active");
}

bar.addEventListener("click", bar1);

function bar1() {
  if (myDiv.style.display === "none") {
    myDiv.style.display = "grid"; // Görünür yap
  } else {
    myDiv.style.display = "none"; // Gizle
  }
}
