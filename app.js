const result = document.getElementById("result");
const filter = document.getElementById("filter");
const listItems = [];

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();
  results.forEach((user) => {
    const li = document.createElement("li");
    li.classList.add("user-item");
    li.innerHTML = `<img src="${user.picture.large}" alt="radom-user" class="user-img">
       <div class="user-input">
         <h4 class="user-name">${user.name.first} ${user.name.last}</h4>
         <p class="user-location">${user.location.city}, ${user.location.country}</p>
       </div>`;
    listItems.push(li);
    result.appendChild(li);
  });
}

getData();

filter.addEventListener("input", function () {
  const searchTerm = filter.value;
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
});
