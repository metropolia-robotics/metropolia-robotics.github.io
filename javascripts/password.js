
(function () {
  // Basic deterrent only — not secure authentication.
  const PASSWORD = "Robo2026";
  const KEY = "robotics_hub_access";

  // Hide the page immediately until access is checked.
  const style = document.createElement("style");
  style.textContent = `
    html:not(.hub-unlocked) body {
      visibility: hidden !important;
    }
  `;
  document.head.appendChild(style);

  function checkAccess() {
    if (sessionStorage.getItem(KEY) === "yes") {
      document.documentElement.classList.add("hub-unlocked");
      return;
    }

    const entered = window.prompt(
      "Robotics Learning Hub\n\nEnter the student access password:"
    );

    if (entered === PASSWORD) {
      sessionStorage.setItem(KEY, "yes");
      document.documentElement.classList.add("hub-unlocked");
    } else {
      document.body.innerHTML =
        "<h2 style='text-align:center;margin-top:15vh'>" +
        "Access not granted</h2>";
      document.documentElement.classList.add("hub-unlocked");
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", checkAccess);
  } else {
    checkAccess();
  }
})();
