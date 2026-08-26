/* Load sidebar, top bar and footer from JS */

function buildSidebar(activePage) {
  var session = getCurrentUser();
  var base = getBasePath();
  var name = session ? session.name : "Guest";

  var html = "";
  html += '<aside class="sidebar" id="sidebar">';
  html += '<div class="sidebar-brand">';
  html += '<div class="logo-icon">DR</div>';
  html += '<div><h2>Document Ready</h2><span>Cameroon Services</span></div>';
  html += '</div>';
  html += '<nav class="sidebar-nav">';
  html += link(base + "pages/dashboard.html", "📊", "Dashboard", activePage === "dashboard");
  html += link(base + "pages/services.html", "📋", "Services", activePage === "services");
  html += link(base + "pages/about.html", "ℹ️", "About", activePage === "about");
  html += link(base + "pages/faq.html", "❓", "FAQ", activePage === "faq");
  html += '</nav>';
  html += '<div class="sidebar-footer">';
  html += '<div class="user-info">Signed in as<br><strong>' + escapeHtml(name) + '</strong></div>';
  html += '<button type="button" class="theme-toggle-btn" id="themeToggle">🌓 Theme</button>';
  html += '<button type="button" class="theme-toggle-btn mt-1" id="logoutBtn" style="margin-top:0.5rem">🚪 Logout</button>';
  html += '</div>';
  html += '</aside>';
  html += '<div class="sidebar-overlay" id="sidebarOverlay"></div>';
  return html;
}

function link(href, icon, label, active) {
  var cls = active ? ' class="active"' : "";
  return '<a href="' + href + '"' + cls + '><span class="nav-icon">' + icon + '</span> ' + label + '</a>';
}

function buildTopBar(title) {
  var html = "";
  html += '<header class="top-bar">';
  html += '<div style="display:flex;align-items:center;gap:0.75rem">';
  html += '<button type="button" class="sidebar-toggle" id="sidebarToggle" aria-label="Menu">☰</button>';
  html += '<h1>' + escapeHtml(title) + '</h1>';
  html += '</div>';
  html += '</header>';
  return html;
}

function buildFooter() {
  var year = new Date().getFullYear();
  return (
    '<footer class="site-footer">' +
    '<p>Document Ready &copy; ' + year + ' &middot; Guidance only &middot; Not an official government site</p>' +
    '<p class="mt-1">Skye8 Frontend Internship Project</p>' +
    '</footer>'
  );
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function initShell(activePage, pageTitle) {
  var shell = document.getElementById("appShell");
  if (!shell) return;

  var sidebarHtml = buildSidebar(activePage);
  var topHtml = buildTopBar(pageTitle || activePage);
  var footerHtml = buildFooter();

  var bodyContent = shell.innerHTML;
  shell.innerHTML =
    sidebarHtml +
    '<div class="main-content">' +
    topHtml +
    '<div class="page-body">' + bodyContent + '</div>' +
    footerHtml +
    '</div>';

  setupSidebarToggle();
  setupThemeToggle();
  setupLogout();
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

  /* Hover open on mobile: when pointer enters toggle or sidebar area */
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
  btn.addEventListener("click", function () {
    toggleTheme();
  });
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
