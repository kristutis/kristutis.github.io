  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn').addEventListener('click', buttonClicked);
  });

  function buttonClicked() {
    localStorage.clear();
    location.reload();
  }

  let jsonUsers = 0;

  window.onload = () => {
    fetch('https://jsonplaceholder.typicode.com/posts/')
      .then(data => data.json())
      .then(data => loadTableData(data))


  }

  function loadTableData(tableData) {
    const tableBody = document.getElementById('tableData');
    let dataHtml = '';

    for (let user of tableData) {
      dataHtml += `<tr data-href="details.html" data-id=${user.id} ><td>${user.userId}</td><td>${user.id}</td><td>${user.title}</td></tr>`;
      jsonUsers++;
    }

    localStorage.setItem("importedUsers", jsonUsers);

    let newObjects = localStorage.getItem("MyuserList");
    if (!(newObjects == null || newObjects == "null")) {
      dataHtml += addUsersFromLocal(JSON.parse(newObjects))
    }
    else {
      document.getElementById("btn").style.display="none";
    }

    tableBody.innerHTML = dataHtml;

  }

  $(document).ready(function () {
    $(document.body).on("click", "tr[data-href]", "tr[data-id]", function () {
      window.location.href = this.dataset.href;

      localStorage.setItem("wantedID", this.dataset.id);
    });
  });

  function addUser(userId, id, title) {
    // console.log(title);
    document.getElementById('tableData').insertAdjacentHTML("beforeend", `
            <tr data-href="http://www.google.com">
            <td>${userId}</td>
            <td>${id}</td>
            <td>${title}</td>
            </tr>
            `);
  }

  function addUsersFromLocal(data) {
    let dataInHtml = '';

    for (let user of data) {
      dataInHtml += `<tr data-href="details.html" data-id=${user.id} ><td>${user.userId}</td><td>${user.id}</td><td>${user.title}</td></tr>`;
      // console.log(dataInHtml);
      // document.getElementById('tableData').insertAdjacentHTML("beforeend", dataInHtml);     
      // $("#tableData tbody").append(dataHTML);
      // $(dataInHtml).appendTo($("tableData"));      
    }

    return dataInHtml;
  }

