export default function initTabnav() {
  const tabMenu = document.querySelectorAll("[data-tab='menu'] li");
  const tabContent = document.querySelectorAll("[data-tab='content'] section");
  tabContent[0].classList.add("ativo", tabContent[0].dataset.anime);

  function activeTab(index) {
    tabContent.forEach((section) => {
      section.classList.remove("ativo", section.dataset.anime);
    });
    tabContent[index].classList.add("ativo", tabContent[index].dataset.anime);
  }

  if (tabContent.length && tabMenu.length) {
    tabMenu.forEach((item, index) => {
      item.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
