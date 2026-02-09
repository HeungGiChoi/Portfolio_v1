const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
  const is_scrolled = window.scrollY > 50;
  const is_contain = navbar.classList.contains("scrolled");

  if (is_scrolled === is_contain) {
    return;
  }

  if (is_scrolled) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
