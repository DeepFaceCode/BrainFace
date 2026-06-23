const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("img");

document.querySelectorAll(".paper-image button").forEach((button) => {
  button.addEventListener("click", () => {
    lightboxImage.src = button.dataset.image;
    lightboxImage.alt = button.querySelector("img").alt;
    lightbox.showModal();
  });
});

lightbox.querySelector(".close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
