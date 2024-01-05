const tabList = document.querySelector('[role="tablist"]');
const tabs = tabList.querySelectorAll('[role = "tab"]');

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
  tab.addEventListener("click", changeTabPanel);
});

let tabFocus = 0;

function changeTabFocus(event) {
  // console.log(event.keyCode);
  const keydownLeft = 37;
  const keydownRight = 39;

  // change the tabindex of the current tab to -1
  if (event.keyCode === keydownLeft || event.keyCode === keydownRight) {
    tabs[tabFocus].setAttribute("tabindex", -1);
    // if the right key is pushed, move to the next tab on the right
    if (event.keyCode === keydownRight) {
      tabFocus++;
      // if the right key is pushed, move to the beginning of the tab list
      if (tabFocus >= tabs.length) {
        tabFocus = 0;
      }
    } //else if the left key is pushed, move to the next tab on the left
    else event.keyCode === keydownLeft;
    {
      tabFocus--;
      //if the left key is pushed, and it is focus on the frist item on the tab then move to the end of the tab list
      if (tabFocus < 0) {
        tabFocus = tabs.length - 1;
      }
    }

    tabs[tabFocus].setAttribute("tabindex", 0);
    tabs[tabFocus].focus();
  }
}

function changeTabPanel(e) {
  const targetTab = e.target;
  const targetPanel = targetTab.getAttribute("aria-controls");
  const tabContainer = targetTab.parentNode;
  const mainContainer = tabContainer.parentNode;
  const targetImage = targetTab.getAttribute("data-image");

  // select each tab that is active to have the white underline styling applied
  mainContainer.querySelector("[aria-selected=true]").setAttribute("aria-selected", false);

  targetTab.setAttribute("aria-selected", true);

  // display and change the content that is selected when the tab is clicked
  hideContent(mainContainer, '[role="tabpanel"]');
  showContent(mainContainer, [`#${targetPanel}`]);
  // mainContainer
  // .querySelectorAll('[role="tabpanel"]')
  // .forEach(panel => panel.setAttribute('hidden', true))

  //   mainContainer.querySelector([`#${targetPanel}`]).removeAttribute('hidden')

  // display and change the picture that is selected when the tab is clicked

  mainContainer.querySelectorAll("picture").forEach((img) => (img.style.display = "none"));

  mainContainer.querySelector([`#${targetImage}`]).style.display = "block";
}

function hideContent(parent, content) {
  parent.querySelectorAll(content).forEach((item) => item.setAttribute("hidden", true));
}

function showContent(parent, content) {
  parent.querySelector(content).removeAttribute("hidden");
}
