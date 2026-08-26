/* Local storage authentication and route protection */

var AUTH_KEY = "docready_users";
var SESSION_KEY = "docready_session";
var PROGRESS_KEY = "docready_progress";

function getUsers() {
  var raw = localStorage.getItem(AUTH_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (e) {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(AUTH_KEY, JSON.stringify(users));
}

function getSession() {
  var raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

function setSession(user) {
  localStorage.setItem(SESSION_KEY, JSON.stringify({
    email: user.email,
    name: user.name,
    loggedInAt: new Date().toISOString()
  }));
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function isLoggedIn() {
  return getSession() !== null;
}

function getCurrentUser() {
  return getSession();
}

function hashPassword(pass) {
  /* Simple hash for demo only, not for production */
  var h = 0;
  for (var i = 0; i < pass.length; i++) {
    h = ((h << 5) - h) + pass.charCodeAt(i);
    h = h & h;
  }
  return "h" + Math.abs(h).toString(16);
}

function registerUser(name, email, password) {
  var users = getUsers();
  email = email.trim().toLowerCase();
  if (!name || !email || !password) {
    return { ok: false, msg: "All fields are required." };
  }
  if (password.length < 6) {
    return { ok: false, msg: "Password must be at least 6 characters." };
  }
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email) {
      return { ok: false, msg: "This email is already registered." };
    }
  }
  users.push({
    name: name.trim(),
    email: email,
    password: hashPassword(password),
    createdAt: new Date().toISOString()
  });
  saveUsers(users);
  return { ok: true, msg: "Account created. Please log in." };
}

function loginUser(email, password) {
  var users = getUsers();
  email = email.trim().toLowerCase();
  var hashed = hashPassword(password);
  for (var i = 0; i < users.length; i++) {
    if (users[i].email === email && users[i].password === hashed) {
      setSession(users[i]);
      return { ok: true, msg: "Login successful." };
    }
  }
  return { ok: false, msg: "Wrong email or password." };
}

function logoutUser() {
  clearSession();
  window.location.href = getBasePath() + "index.html";
}

function getBasePath() {
  var path = window.location.pathname;
  if (path.indexOf("/pages/") !== -1) {
    return "../";
  }
  return "";
}

function requireAuth() {
  if (!isLoggedIn()) {
    var base = getBasePath();
    window.location.href = base + "pages/login.html";
    return false;
  }
  return true;
}

function redirectIfLoggedIn() {
  if (isLoggedIn()) {
    var base = getBasePath();
    window.location.href = base + "pages/dashboard.html";
  }
}

/* Progress helpers */
function getAllProgress() {
  var raw = localStorage.getItem(PROGRESS_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch (e) {
    return {};
  }
}

function getUserProgress(email) {
  var all = getAllProgress();
  return all[email] || {};
}

function saveUserProgress(email, data) {
  var all = getAllProgress();
  all[email] = data;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(all));
}

function getServiceProgress(serviceId) {
  var session = getSession();
  if (!session) return { checked: [], formSubmitted: false };
  var prog = getUserProgress(session.email);
  return prog[serviceId] || { checked: [], formSubmitted: false };
}

function setServiceProgress(serviceId, data) {
  var session = getSession();
  if (!session) return;
  var prog = getUserProgress(session.email);
  prog[serviceId] = data;
  saveUserProgress(session.email, prog);
}

function calcProgressPercent(serviceId) {
  var service = typeof getServiceById === "function" ? getServiceById(serviceId) : null;
  if (!service) return 0;
  var total = service.documents.length + 1;
  var prog = getServiceProgress(serviceId);
  var done = (prog.checked ? prog.checked.length : 0) + (prog.formSubmitted ? 1 : 0);
  return Math.round((done / total) * 100);
}
