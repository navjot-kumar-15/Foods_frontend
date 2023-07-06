// Menu bar
document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

// End of Menu bar

const icons = document.querySelectorAll(".section_1_icons i");

let i = 1;

setInterval(() => {
  i++;
  const icon = document.querySelector(".section_1_icons i.change");
  icon.classList.remove("change");
  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 2000);
