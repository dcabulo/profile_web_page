const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");
const sideMenu = document.getElementById("side-menu");

const openTab = (tabName) => {
  Array.from(tabLinks).forEach((tabLink) => {
    tabLink.classList.remove("active-link");
  });

  Array.from(tabContents).forEach((tabContent) => {
    tabContent.classList.remove("active-tab");
  });

  let currenTab = Array.from(tabLinks).filter(
    (tab) => tabName === tab.textContent.replace(/\s/g, "").toLowerCase()
  )[0];

  currenTab.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");
};

const openMenu = () => {
  sideMenu.style.right = "0";
};
const closeMenu = () => {
  sideMenu.style.right = "-200px";
};
