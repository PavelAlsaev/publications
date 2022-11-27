(() => {
  // scripts/main.js
  var logoutBtn = document.getElementById("logout");
  var facultetsBtn = document.getElementById("facultets");
  var teacherBtn = document.getElementById("teachers");
  var editionBtn = document.getElementById("edition");
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("role");
    window.location.replace("/login.html");
  });
  facultetsBtn.addEventListener("click", () => {
    window.location.replace("/facultets.html");
  });
  editionBtn.addEventListener("click", () => {
    window.location.replace("/edition.html");
  });
  teacherBtn.addEventListener("click", () => {
    window.location.replace("/teacher.html");
  });
})();
