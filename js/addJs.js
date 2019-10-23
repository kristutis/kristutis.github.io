let usersCount = localStorage.getItem("importedUsers");

let localObjects = JSON.parse(localStorage.getItem("MyuserList"));

let users = [];
let totalUsers = 0;

window.onload = () => {
  if (localObjects == null || localObjects == "null") {
    totalUsers = usersCount;
    // console.log('tuscia');
  }
  else {
    totalUsers = localStorage.getItem("totalUsers");
    // console.log('yra');
    users = localObjects;
  }
}

const addUser = (ev) => {
  totalUsers++;
  ev.preventDefault();  //to stop the form submitting
  let user = {
    userId: document.getElementById('userId').value,
    id: totalUsers,
    title: document.getElementById('title').value,
    body: document.getElementById('body').value
  }
  users.push(user);
  document.forms[0].reset(); // to clear the form for the next entries

  // console.warn('added', { users });

  // let pre = document.querySelector('#msg pre');
  // pre.textContent = '\n' + JSON.stringify(users, '\t', 2);
  // saving to localStorage

  localStorage.setItem('MyuserList', JSON.stringify(users));
  localStorage.setItem("totalUsers", totalUsers);
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn').addEventListener('click', addUser);
});

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
