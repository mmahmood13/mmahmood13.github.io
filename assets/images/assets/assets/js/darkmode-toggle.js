document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.createElement("button");
  toggle.innerHTML = "🌓";
  toggle.title = "Toggle dark mode";
  toggle.style.position = "fixed";
  toggle.style.top = "20px";
  toggle.style.right = "20px";
  toggle.style.zIndex = "999";
  toggle.style.background = "#fff";
  toggle.style.border = "none";
  toggle.style.fontSize = "1.5rem";
  toggle.style.cursor = "pointer";
  toggle.style.padding = "5px";
  toggle.style.borderRadius = "50%";
  toggle.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";

  document.body.appendChild(toggle);

  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }

  toggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
  });
});
