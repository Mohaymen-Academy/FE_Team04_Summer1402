const templatesSection = document.getElementById("toggle-template");
const templates = document.getElementById("templates");

templatesSection.addEventListener("click", () => {
  templates.classList.toggle("open");
});

const setting = document.getElementById("setting");
const settingSection = document.getElementById("toggle-setting");
settingSection.addEventListener("click", () => {
  setting.classList.toggle("open");
});
