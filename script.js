const userData = document.querySelector("[data-user]");
const userDataCards = document.querySelector("[data-user-cards]");
const searchField = document.querySelector("[data-search]");
let users = [];
let inputValue;
//fill page with ten placeholder cards
for (let i = 1; i <= 10; i++) {
  userDataCards.append(userData.content.cloneNode(true));
}
//option 1//
/* fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((user) => {
      const card = userData.content.cloneNode(true).children[0];
      const header = card.querySelector("[data-header]");
      const body = card.querySelector("[data-body]");
      const footer = card.querySelector("[data-footer]");
      const { name, email, username } = user;
      header.textContent = name;
      body.textContent = email;
      footer.textContent = username;
      userDataCards.append(card);
    });
  }); */

// const updateDebounceText = debounce((value) => {
//   inputValue = value;
// }, 100);

// function debounce(callback, delay = 1000) {
//   let timeout;
//   return (...args) => {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       callback(...args);
//     }, delay);
//   };
// }

searchField.addEventListener("input", (event) => {
  // updateDebounceText(event.target.value);
  const inputValue = event.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(inputValue) ||
      user.email.toLowerCase().includes(inputValue) ||
      user.username.toLowerCase().includes(inputValue);
    user.element.classList.toggle("vanish", !isVisible);
  });
});

//option2 async await approach
const url = "https://jsonplaceholder.typicode.com/users";
async function getUserData() {
  const response = await fetch(url);
  const data = await response.json();
  userDataCards.innerHTML = ""; //clearing placeholder data
  users = data.map((user) => {
    const card = userData.content.cloneNode(true).children[0];
    const header = card.querySelector("[data-header]");
    const body = card.querySelector("[data-body]");
    const footer = card.querySelector("[data-footer]");
    const { name, email, username } = user;
    header.textContent = name;
    body.textContent = email;
    footer.textContent = username;
    userDataCards.append(card);
    return { name: name, email: email, username: username, element: card };
  });
}

getUserData();
