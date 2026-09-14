(function () {
  var body = document.body;
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");

  function setOpen(open) {
    body.classList.toggle("nav-open", open);
    if (toggle) {
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    }
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setOpen(!body.classList.contains("nav-open"));
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) {
        setOpen(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    });
  }

  document.querySelectorAll("[data-copy-brief]").forEach(function (button) {
    button.addEventListener("click", function () {
      var text = [
        "Libertas escrow briefing request",
        "Project:",
        "Parties:",
        "Contract stage:",
        "Planned tranches:",
        "Release obligations:",
        "Known delivery risks:",
      ].join("\\n");

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          button.textContent = "Brief copied";
        });
      } else {
        button.textContent = "Brief outline ready";
      }
    });
  });
})();
