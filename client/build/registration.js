(() => {
  // scripts/config.js
  var CONFIG = {
    rootApi: "http://localhost:3000"
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

  // scripts/registration.js
  var form = document.querySelector("form");
  var inputEmail = document.querySelector("[type=email]");
  var inputPassword = document.querySelector("[type=password]");
  var toastLiveExample = document.getElementById("liveToast");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const login = inputEmail.value;
    const password = inputPassword.value;
    api_default.create("user", {
      login,
      password,
      role: "USER"
    }).then((data) => {
      if (data.statusCode === 500) {
        const toast = new bootstrap.Toast(toastLiveExample);
        toast.show();
        return;
      }
      console.log(data);
      window.location.replace("/login.html");
    }).catch((e2) => {
      return;
    });
  });
})();
