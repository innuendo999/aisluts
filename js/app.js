document.querySelectorAll("img[width='150']").forEach((img) => {
  img.addEventListener("click", () => img.classList.toggle("scale-110"));
});
