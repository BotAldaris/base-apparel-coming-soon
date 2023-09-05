const hidden = document.querySelectorAll(".hidden");
const forms = document.querySelector("form");
const input = document.querySelector("input");
forms?.addEventListener("submit", (e) => {
  e.preventDefault();
});
input?.addEventListener("change", (e) => {
  if (input.value != "" && input.value.includes("@")) {
    for (let index = 0; index < hidden.length; index++) {
      const element = hidden[index];
      element.classList.add("hidden");
      console.log("oi2");
    }
  } else {
    for (let index = 0; index < hidden.length; index++) {
      const element = hidden[index];
      element.classList.remove("hidden");
      console.log("oi");
    }
  }
});
