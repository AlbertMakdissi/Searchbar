const userData = document.querySelector("[data-user]");
const userDataCards = document.querySelector("[data-user-cards]");
const searchField = document.querySelector("[data-search]");

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

const url = "https://jsonplaceholder.typicode.com/users";
async function getUserData() {
  const response = await fetch(url);
  const data = await response.json();
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
}

getUserData();
