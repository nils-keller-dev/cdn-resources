export const render3DAlbum = (projectName) => {
  const BASE_URL =
    "https://cdn.jsdelivr.net/gh/nils-keller-dev/cdn-resources@latest/images/";

  document.querySelectorAll("div").forEach((el) => {
    el.style.backgroundImage = `url(${BASE_URL}${projectName}/${el.id}.webp)`;
    el.style.translate = `0 0 ${el.innerHTML}em`;
  });

  document.addEventListener("click", () =>
    document.body.classList.toggle("disabled")
  );
};