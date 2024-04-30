console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

// Exercise: Append a new entry to the toast messages container

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const newMessage = document.createElement("li");
  newMessage.classList.add("toast-container__message");

  newMessage.textContent = "I'm a toast message.";
  toastContainer.appendChild(newMessage);
});

// Exercise: Clear all the toast messages

clearButton.addEventListener("click", () => {
  toastContainer.innerHTML = "";
});
