const nav = document.querySelector(".primary-navigation");
const navBtn = document.querySelector(".mobile-nav-toggle");

//when the hamburger is clicked  open if close and close if open

navBtn.onclick = function () {
  const visible = nav.getAttribute("data-visible");
  // if nav is false then open it
  if (visible === "false") {
    nav.setAttribute("data-visible", true);
    navBtn.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navBtn.setAttribute("aria-expanded", false);
  }

//   console.log("visibility is", visible);
//   console.log(navBtn.getAttribute("aria-expanded"));
};
