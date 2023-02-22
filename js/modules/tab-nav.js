export default class Tabnav {
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu);
    this.tabContent = document.querySelectorAll(content);
    this.activeClass = "ativo";
  }

  // ativa a tab de acordo com o index da mesma
  activeTab(index) {
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass, section.dataset.anime);
    });
    this.tabContent[index].classList.add(
      this.activeClass,
      this.tabContent[index].dataset.anime
    );
  }

  // adiciona os eventos nas tabs
  addTabNavEvent() {
    this.tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => this.activeTab(index));
    });
  }

  init() {
    if (this.tabContent.length && this.tabMenu.length) {
      // ativa o primeiro item
      this.activeTab(0);
      this.addTabNavEvent();
    }
    return this;
  }
}
