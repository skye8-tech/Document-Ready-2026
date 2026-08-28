/* Small shared helpers that run on every page */

document.addEventListener("DOMContentLoaded", function () {
  applySavedTheme();
});

/* Show or hide a password input */
function setupPasswordToggle(buttonId, inputId) {
  var btn = document.getElementById(buttonId);
  var input = document.getElementById(inputId);
  if (!btn || !input) return;

  btn.addEventListener("click", function () {
    if (input.type === "password") {
      input.type = "text";
      btn.textContent = "🙈";
    } else {
      input.type = "password";
      btn.textContent = "👁";
    }
  });
}

/* Language dropdown on auth and landing pages */
function setupAuthLangSelect(selectId) {
  var sel = document.getElementById(selectId);
  if (!sel) return;
  if (typeof getLang === "function") {
    sel.value = getLang();
  }
  sel.addEventListener("change", function () {
    setLang(sel.value);
    window.location.reload();
  });
}
