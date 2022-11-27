(() => {
  // scripts/config.js
  var CONFIG = {
    rootApi: "http://92.63.101.204:3000"
  };
  var config_default = CONFIG;

  // scripts/services/api.js
  var API = {
    get: async (url) => {
      const result = await fetch(config_default.rootApi + "/" + url);
      return await result.json();
    },
    create: async (url, data) => {
      const result = await fetch(config_default.rootApi + "/" + url, {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      }).catch((e) => {
        throw new Error();
      });
      return await result.json();
    },
    update: async (url, id, data) => {
      const result = await fetch(config_default.rootApi + "/" + url + "/" + id, {
        method: "PATCH",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      });
      return await result.json();
    },
    delete: async (url, id) => {
      const result = await fetch(config_default.rootApi + "/" + url + "/" + id, {
        method: "DELETE"
      });
      return await result.json();
    },
    logout: async () => {
      localStorage.removeItem("role");
    },
    auth: async (login, password) => {
      const result = await fetch(config_default.rootApi + "/user");
      const users = await result.json();
      const res = users.find((user) => user.login === login && user.password === password);
      if (!res) {
        localStorage.removeItem("role");
        return null;
      }
      localStorage.setItem("role", res.role);
      return res;
    },
    isAdmin: () => {
      return localStorage.getItem("role") === "ADMIN";
    }
  };
  var api_default = API;

  // scripts/edition.js
  var backBtn = document.getElementById("back");
  var wrapper = document.querySelector(".wrapper");
  var formCreate = document.querySelector("#exampleModal form");
  var formUpdate = document.querySelector("#exampleModal2 form");
  var createEdition = document.querySelector("#createEdition");
  var createHoust = document.querySelector("#create");
  var formCreateEdition = document.querySelector("#exampleModal3 form");
  var houseId = null;
  var createBtn = document.querySelector("#create");
  if (!api_default.isAdmin()) {
    createBtn.remove();
    createEdition.remove();
  }
  var fillTeacher = async () => {
    const select = document.querySelector("#teacher");
    select.innerHTML = "";
    const departments = await api_default.get("teacher");
    departments.map((d) => {
      const option = document.createElement("option");
      option.innerText = d.name;
      option.value = d.id;
      select.appendChild(option);
    });
  };
  var fillTeacherU = async () => {
    const select = document.querySelector("#uteacher");
    select.innerHTML = "";
    const departments = await api_default.get("teacher");
    departments.map((d) => {
      const option = document.createElement("option");
      option.innerText = d.name;
      option.value = d.id;
      select.appendChild(option);
    });
  };
  formCreateEdition.addEventListener("submit", async (e) => {
    e.preventDefault();
    const udc = document.querySelector("#udc").value;
    const name = document.querySelector("#name-edition").value;
    const type = document.querySelector("#type").value;
    const autor = document.querySelector("#autor").value;
    const countOfPages = document.querySelector("#countOfPages").value;
    const countOfTables = document.querySelector("#countOfTables").value;
    const teacher = document.querySelector("#teacher").value;
    const countOfDrawnings = document.querySelector("#countOfDrawnings").value;
    const year = document.querySelector("#year").value;
    const nameAnnotation = document.querySelector("#nameAnnotation").value;
    const annotationArticle = document.querySelector("#annotationArticle").value;
    const annotationThesis = document.querySelector("#annotationThesis").value;
    const yearOfPublicationAnnotation = document.querySelector("#yearOfPublicationAnnotation").value;
    const subject = document.querySelector("#subject").value;
    const contribution = document.querySelector("#contribution").value;
    const ed = await api_default.create("edition", {
      udc,
      name,
      type,
      autor,
      countOfPages,
      countOfTables,
      countOfDrawnings,
      year,
      nameAnnotation,
      annotationArticle,
      annotationThesis,
      yearOfPublicationAnnotation,
      subject,
      publishingHouse: {
        id: houseId
      }
    });
    await api_default.create("teacher-edition", {
      teacher: {
        id: teacher
      },
      edition: {
        id: ed.id
      },
      contribution
    });
    document.querySelector("#exampleModal3 .btn-close").click();
    updateEdition({ id: houseId });
  });
  formCreate.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const address = document.querySelector("#address").value;
    await api_default.create("publishing-house", {
      name,
      address
    });
    document.querySelector("#exampleModal .btn-close").click();
    start();
  });
  formUpdate.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.querySelector("#uname").value;
    const address = document.querySelector("#uaddress").value;
    await api_default.update("publishing-house", houseId, {
      name,
      address
    });
    document.querySelector("#exampleModal2 .btn-close").click();
    start();
  });
  var updateEdition = async (h) => {
    createEdition.style.display = "block";
    createHoust.style.display = "none";
    wrapper.innerHTML = "";
    backBtn.removeEventListener("click", toMain);
    backBtn.addEventListener("click", start);
    wrapper.innerHTML = "";
    let edition = await api_default.get("edition");
    edition = edition.filter((e) => e.publishingHouse?.id === h.id);
    const table = document.createElement("table");
    table.classList.add("table");
    const tbody = document.createElement("tbody");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const titles = ["\u0414\u0430\u0442\u0430", "\u0422\u0438\u043F", "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435", "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u044F"];
    titles.map((t) => {
      const td = document.createElement("th");
      td.innerText = t;
      tr.append(td);
    });
    thead.append(tr);
    const title = ["year", "type", "name"];
    edition.map((e) => {
      const tr2 = document.createElement("tr");
      title.map((title2) => {
        const td2 = document.createElement("td");
        td2.innerText = e[title2];
        tr2.append(td2);
      });
      const td = document.createElement("td");
      if (api_default.isAdmin()) {
        const btnRemove = document.createElement("button");
        btnRemove.classList.add("btn", "btn-danger");
        btnRemove.innerText = "\u0423\u0434\u0430\u043B\u0438\u0442\u044C";
        btnRemove.addEventListener("click", async () => {
          await api_default.delete("edition", e.id);
          updateEdition({ id: houseId });
        });
        const btnEdit = document.createElement("button");
        btnEdit.classList.add("btn", "btn-warning");
        btnEdit.innerText = "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C";
        btnEdit.dataset.bsTarget = "#exampleModal4";
        btnEdit.dataset.bsToggle = "modal";
        btnEdit.addEventListener("click", async () => {
          let te = await api_default.get("teacher-edition");
          te = te.find((te2) => +te2.edition.id === +e.id);
          console.log();
          document.querySelector("#uudc").value = e.udc;
          document.querySelector("#uname-edition").value = e.name;
          document.querySelector("#utype").value = e.type;
          document.querySelector("#uautor").value = e.autor;
          document.querySelector("#ucountOfPages").value = e.countOfPages;
          document.querySelector("#ucountOfTables").value = e.countOfTables;
          document.querySelector("#uteacher").value = te.teacher.id;
          document.querySelector("#ucountOfDrawnings").value = e.countOfDrawnings;
          document.querySelector("#uyear").value = e.year;
          document.querySelector("#unameAnnotation").value = e.nameAnnotation;
          document.querySelector("#uannotationArticle").value = e.annotationArticle;
          document.querySelector("#uannotationThesis").value = e.annotationThesis;
          document.querySelector("#uyearOfPublicationAnnotation").value = e.yearOfPublicationAnnotation;
          document.querySelector("#usubject").value = e.subject;
          document.querySelector("#ucontribution").value = te.contribution;
        });
        td.append(btnRemove);
        td.appendChild(btnEdit);
      }
      tr2.append(td);
      tbody.append(tr2);
    });
    table.append(thead);
    table.append(tbody);
    wrapper.append(table);
  };
  var toMain = () => {
    window.location.replace("/");
  };
  backBtn.addEventListener("click", toMain);
  var start = async () => {
    createEdition.style.display = "none";
    createHoust.style.display = "block";
    backBtn.removeEventListener("click", start);
    backBtn.addEventListener("click", toMain);
    const houses = await api_default.get("publishing-house");
    wrapper.innerHTML = "";
    const table = document.createElement("table");
    table.classList.add("table");
    const tbody = document.createElement("tbody");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    thead.append(tr);
    const titles = ["\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435", "\u0410\u0434\u0440\u0435\u0441", "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0435"];
    titles.map((t) => {
      const td = document.createElement("th");
      td.innerText = t;
      tr.append(td);
    });
    const title = ["name", "address"];
    houses.map((h) => {
      const tr2 = document.createElement("tr");
      title.map((t) => {
        const td2 = document.createElement("td");
        td2.innerText = h[t];
        tr2.append(td2);
      });
      const td = document.createElement("td");
      const btn = document.createElement("btn");
      btn.innerText = "\u0418\u0437\u0434\u0430\u043D\u0438\u044F";
      btn.addEventListener("click", async () => {
        houseId = h.id;
        await updateEdition(h);
      });
      btn.classList.add("btn", "btn-primary");
      td.append(btn);
      if (api_default.isAdmin()) {
        const btnDelete = document.createElement("button");
        btnDelete.classList.add("btn", "btn-danger");
        btnDelete.addEventListener("click", async (e) => {
          await api_default.delete("publishing-house", h.id);
          start();
        });
        btnDelete.innerText = "\u0423\u0434\u0430\u043B\u0438\u0442\u044C";
        td.append(btnDelete);
        const btnUpdate = document.createElement("button");
        btnUpdate.classList.add("btn", "btn-warning");
        btnUpdate.innerText = "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C";
        btnUpdate.dataset.bsTarget = "#exampleModal2";
        btnUpdate.dataset.bsToggle = "modal";
        btnUpdate.addEventListener("click", (e) => {
          houseId = h.id;
          document.querySelector("#uname").value = h.name;
          document.querySelector("#uaddress").value = h.address;
        });
        td.append(btnUpdate);
      }
      tr2.append(td);
      tbody.append(tr2);
    });
    table.append(thead);
    table.append(tbody);
    wrapper.append(table);
  };
  start();
  fillTeacher();
  fillTeacherU();
})();
