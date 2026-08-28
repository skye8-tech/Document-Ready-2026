/* This file builds the sidebar, top bar and footer with simple DOM methods */

/* Create one element quickly */
function makeEl(tag, className, text) {
  var node = document.createElement(tag);
  if (className) {
    node.className = className;
  }
  if (text !== undefined && text !== null && text !== "") {
    node.textContent = text;
  }
  return node;
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* One nav link in the sidebar */
function makeNavLink(href, icon, label, isActive) {
  var a = makeEl("a");
  a.href = href;
  if (isActive) {
    a.className = "active";
  }

  var iconSpan = makeEl("span", "nav-icon", icon);
  a.appendChild(iconSpan);
  a.appendChild(document.createTextNode(" " + label));
  return a;
}

/* Build the left sidebar */
function buildSidebar(activePage) {
  var session = getCurrentUser();
  var base = getBasePath();
  var userName = session ? session.name : "Guest";
  var lang = typeof getLang === "function" ? getLang() : "en";

  var aside = makeEl("aside", "sidebar");
  aside.id = "sidebar";

  /* Brand block */
  var brand = makeEl("div", "sidebar-brand");
  brand.appendChild(makeEl("div", "logo-icon", "DR"));

  var brandText = makeEl("div");
  brandText.appendChild(makeEl("h2", null, "Document Ready"));
  var subText = typeof t === "function" ? t("brandSub") : "Cameroon Services";
  brandText.appendChild(makeEl("span", null, subText));
  brand.appendChild(brandText);
  aside.appendChild(brand);

  /* Navigation links */
  var nav = makeEl("nav", "sidebar-nav");
  var pages = [
    { id: "dashboard", file: "pages/dashboard.html", icon: "📊", key: "dashboard" },
    { id: "services", file: "pages/services.html", icon: "📋", key: "services" },
    { id: "about", file: "pages/about.html", icon: "ℹ️", key: "about" },
    { id: "faq", file: "pages/faq.html", icon: "❓", key: "faq" },
    { id: "admin", file: "pages/admin.html", icon: "🛡️", key: "admin" }
  ];

  for (var i = 0; i < pages.length; i++) {
    var p = pages[i];
    var label = typeof t === "function" ? t(p.key) : p.key;
    var link = makeNavLink(base + p.file, p.icon, label, activePage === p.id);
    nav.appendChild(link);
  }
  aside.appendChild(nav);

  /* Sidebar bottom: user, language, theme, logout */
  var sideFooter = makeEl("div", "sidebar-footer");

  var userInfo = makeEl("div", "user-info");
  var signedLabel = typeof t === "function" ? t("signedInAs") : "Signed in as";
  userInfo.appendChild(document.createTextNode(signedLabel));
  userInfo.appendChild(makeEl("br"));
  userInfo.appendChild(makeEl("strong", null, userName));
  sideFooter.appendChild(userInfo);

  /* Language select */
  var langBox = makeEl("div");
  langBox.style.marginBottom = "0.6rem";
  var langLabel = makeEl("label", null, typeof t === "function" ? t("langLabel") : "Language");
  langLabel.style.fontSize = "0.75rem";
  langLabel.style.opacity = "0.8";
  langBox.appendChild(langLabel);

  var select = makeEl("select");
  select.id = "langSelect";
  select.className = "lang-select";

  var optEn = makeEl("option", null, "English");
  optEn.value = "en";
  if (lang === "en") optEn.selected = true;

  var optFr = makeEl("option", null, "Francais");
  optFr.value = "fr";
  if (lang === "fr") optFr.selected = true;

  select.appendChild(optEn);
  select.appendChild(optFr);
  langBox.appendChild(select);
  sideFooter.appendChild(langBox);

  var themeBtn = makeEl("button", "theme-toggle-btn");
  themeBtn.type = "button";
  themeBtn.id = "themeToggle";
  themeBtn.textContent = "🌓 " + (typeof t === "function" ? t("theme") : "Theme");
  sideFooter.appendChild(themeBtn);

  var logoutBtn = makeEl("button", "theme-toggle-btn");
  logoutBtn.type = "button";
  logoutBtn.id = "logoutBtn";
  logoutBtn.style.marginTop = "0.5rem";
  logoutBtn.textContent = "🚪 " + (typeof t === "function" ? t("logout") : "Logout");
  sideFooter.appendChild(logoutBtn);

  aside.appendChild(sideFooter);

  var overlay = makeEl("div", "sidebar-overlay");
  overlay.id = "sidebarOverlay";

  return { sidebar: aside, overlay: overlay };
}

function buildTopBar(title) {
  var header = makeEl("header", "top-bar");
  var left = makeEl("div");
  left.style.display = "flex";
  left.style.alignItems = "center";
  left.style.gap = "0.75rem";

  var toggle = makeEl("button", "sidebar-toggle");
  toggle.type = "button";
  toggle.id = "sidebarToggle";
  toggle.setAttribute("aria-label", "Menu");
  toggle.textContent = "☰";

  left.appendChild(toggle);
  left.appendChild(makeEl("h1", null, title));
  header.appendChild(left);
  return header;
}

function buildFooter() {
  var year = new Date().getFullYear();
  var guide = typeof t === "function" ? t("footerGuide") : "Guidance only";
  var notOff = typeof t === "function" ? t("footerNotOfficial") : "Not an official government site";

  var footer = makeEl("footer", "site-footer");
  footer.appendChild(makeEl("p", null, "Document Ready © " + year + " · " + guide + " · " + notOff));
  footer.appendChild(makeEl("p", "mt-1", "Document Ready Internship Final Project"));
  return footer;
}

/* Wrap page content with sidebar + top bar + footer */
function initShell(activePage, pageTitle) {
  var shell = document.getElementById("appShell");
  if (!shell) return;

  /* Move existing page content into a fragment */
  var pageBits = document.createDocumentFragment();
  while (shell.firstChild) {
    pageBits.appendChild(shell.firstChild);
  }

  var parts = buildSidebar(activePage);
  var main = makeEl("div", "main-content");
  var body = makeEl("div", "page-body");
  body.appendChild(pageBits);

  main.appendChild(buildTopBar(pageTitle || activePage));
  main.appendChild(body);
  main.appendChild(buildFooter());

  shell.appendChild(parts.sidebar);
  shell.appendChild(parts.overlay);
  shell.appendChild(main);

  setupSidebarToggle();
  setupThemeToggle();
  setupLogout();
  setupLangSwitch();

  if (typeof applyTranslations === "function") {
    applyTranslations();
  }
}

function setupSidebarToggle() {
  var toggle = document.getElementById("sidebarToggle");
  var sidebar = document.getElementById("sidebar");
  var overlay = document.getElementById("sidebarOverlay");
  if (!toggle || !sidebar) return;

  function openSidebar() {
    sidebar.classList.add("open");
    if (overlay) overlay.classList.add("visible");
  }

  function closeSidebar() {
    sidebar.classList.remove("open");
    if (overlay) overlay.classList.remove("visible");
  }

  toggle.addEventListener("click", function () {
    if (sidebar.classList.contains("open")) {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  if (overlay) {
    overlay.addEventListener("click", closeSidebar);
  }

  toggle.addEventListener("mouseenter", function () {
    if (window.innerWidth <= 900) openSidebar();
  });
  sidebar.addEventListener("mouseenter", function () {
    if (window.innerWidth <= 900) openSidebar();
  });
  sidebar.addEventListener("mouseleave", function () {
    if (window.innerWidth <= 900) closeSidebar();
  });
}

function setupThemeToggle() {
  var btn = document.getElementById("themeToggle");
  if (!btn) return;
  btn.addEventListener("click", toggleTheme);
}

function setupLogout() {
  var btn = document.getElementById("logoutBtn");
  if (!btn) return;
  btn.addEventListener("click", function () {
    if (confirm("Do you want to log out?")) {
      logoutUser();
    }
  });
}

function setupLangSwitch() {
  var sel = document.getElementById("langSelect");
  if (!sel) return;
  sel.addEventListener("change", function () {
    setLang(sel.value);
    window.location.reload();
  });
}

function toggleTheme() {
  var html = document.documentElement;
  var current = html.getAttribute("data-theme");
  var next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("docready_theme", next);
}

function applySavedTheme() {
  var saved = localStorage.getItem("docready_theme") || "light";
  document.documentElement.setAttribute("data-theme", saved);
}

applySavedTheme();
