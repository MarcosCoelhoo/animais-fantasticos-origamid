export default function initAccordion() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt'
  );

  function accordion() {
    this.nextElementSibling.classList.toggle("ativo");
    this.classList.toggle("ativo");
  }

  if (accordionList.length) {
    accordionList[0].classList.add("ativo");
    accordionList[0].nextElementSibling.classList.add("ativo");

    accordionList.forEach((item) => {
      item.addEventListener("click", accordion);
    });
  }
}
