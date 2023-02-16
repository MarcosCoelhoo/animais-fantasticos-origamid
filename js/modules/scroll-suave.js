export default function initScrollSuave() {
  const linksInternos = document.querySelectorAll(
    '[data-anime="scroll-interno"] a[href^="#"]'
  );

  function scrollSuave(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  linksInternos.forEach((item) => {
    item.addEventListener("click", scrollSuave);
  });
}
