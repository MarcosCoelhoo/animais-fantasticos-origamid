export default class Accordion {
  constructor(lista) {
    this.accordionList = document.querySelectorAll(lista);
    this.activeClass = "ativo";
  }

  toggleAccordion(item) {
    item.nextElementSibling.classList.toggle(this.activeClass);
    item.classList.toggle(this.activeClass);
  }

  // adiciona eventos ao accordion
  addAccordionEvent() {
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item));
    });
  }

  // iniciar função
  init() {
    if (this.accordionList.length) {
      // ativar primeiro item
      this.toggleAccordion(this.accordionList[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}
