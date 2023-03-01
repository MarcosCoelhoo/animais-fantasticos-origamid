import outsideClick from "./outsideclick.js";

export default class DropdownMenu {
  //  Defina touchstart e click como argumento padrão
  // caso o usuário na defina nenhum
  constructor(dropdownMenus, events = ["touchstart", "click"]) {
    this.dropdownMenus = document.querySelectorAll(dropdownMenus);
    this.events = events;
    this.activeClass = "active";

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  // Ativa o dropdownmenu e adiciona
  // a função que observa o clique fora dele
  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove("active");
    });
  }

  addDropdownMenusEvent() {
    this.dropdownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropdownMenus.length) {
      this.addDropdownMenusEvent();
    }

    return this;
  }
}
