window.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tabheader__item");
  const tabsContent = document.querySelectorAll(".tabcontent");
  const tabsParent = document.querySelector(".tabheader__item");

  function hideTabContent() {
    tabsContent.forEach((i) => {
      i.style.display = "none";
    });
  }
});
