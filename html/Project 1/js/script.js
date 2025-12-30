const input = document.querySelector("main input");

input.addEventListener("focus", () => {
  input.placeholder = "Type & press Enter to search...";
});

input.addEventListener("blur", () => {
  input.placeholder = "search for restaurant, cuisine or a dish";
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value.trim()) {
    input.placeholder = "Searching...";
    input.value = "";

    setTimeout(() => {
      input.placeholder = "search for restaurant, cuisine or a dish";
    }, 1200);
  }
});
