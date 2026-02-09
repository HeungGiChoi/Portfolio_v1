const navbar = document.querySelector("nav");
let timer = false;

function throttle(func, delay) {
  return () => {
    if (timer) {
      return;
    }

    timer = setTimeout(() => {
      func();
      timer = false;
    }, delay);
  };
}

window.addEventListener(
  "scroll",
  throttle(() => {
    const is_scrolled = window.scrollY > 50;
    const is_contain = navbar.classList.contains("scrolled");

    if (is_scrolled !== is_contain) {
      if (is_scrolled) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }
  }, 50),
);
