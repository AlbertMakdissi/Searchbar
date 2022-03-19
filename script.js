const userData = document.querySelector("[data-user]");
const userDataCards = document.querySelector("[data-user-cards]");
const searchField = document.querySelector("[data-search]");
let users = [];
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

searchField.addEventListener("input", (event) => {
  const inputValue = event.target.value.toLowerCase();
  users.forEach((user) => {
    const isVisible =
      user.name.toLowerCase().includes(inputValue) ||
      user.email.toLowerCase().includes(inputValue) ||
      user.username.toLowerCase().includes(inputValue);
    user.element.classList.toggle("hide", !isVisible);
  });
});

//option2 ajax approach
const url = "https://jsonplaceholder.typicode.com/users";
async function getUserData() {
  const response = await fetch(url);
  const data = await response.json();
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
