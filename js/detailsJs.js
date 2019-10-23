    window.onload = () => {

      let id1 = localStorage.getItem("wantedID");
      let importedCount1 = localStorage.getItem("importedUsers");

      let id = parseInt(id1);
      let importedCount = parseInt(importedCount1);

      // console.log(id);
      // console.log(importedCount);

      let jsonURL = `https://jsonplaceholder.typicode.com/posts/${id}`;

      if (id > importedCount) {
        loadLocalUser(id);
      } else {
        fetch(jsonURL)
          .then(data => data.json())
          .then(data => loadTableData(data))
      }

    }

    function loadLocalUser(id) {
      let localObjects = JSON.parse(localStorage.getItem("MyuserList"));

      for (let user of localObjects) {
        if (user.id == id) {
          loadTableData(user)
        }
      }
    }

    function loadTableData(data) {
      const tableBody = document.getElementById('tableData');
      // let dataHtml = '';
      let dataHtml = `<tr>
                    <td><b>User ID:</b></td>
                    <td>${data.userId}</td>
                  </tr>
                  <tr>
                    <td><b>ID:</b></td>
                    <td>${data.id}</td>
                  </tr>
                  <tr>
                    <td><b>Title:</b></td>
                    <td>${data.title}</td>
                  </tr>
                  <tr>
                    <td><b>Body</b></td>
                    <td>${data.body}</td>
                  </tr>`;

      tableBody.innerHTML = dataHtml;
    }
