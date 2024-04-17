const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  if (age >= 12 && age <= 20) {
    console.log("You are a teen.");
    output.innerHTML = "You are a teen.";
  } else {
    console.log("You are not a teen.");
    output.innerHTML = "You are not a teen.";
  }
});
