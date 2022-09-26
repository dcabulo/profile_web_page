const tabLinks = document.getElementsByClassName("tab-links");
const tabContents = document.getElementsByClassName("tab-contents");

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
