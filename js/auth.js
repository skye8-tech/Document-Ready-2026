/* This file handles user accounts: register, login, logout, session */

var USERS_KEY = "docready_users";
var SESSION_KEY = "docready_session";

/* Read all users from localStorage */
function getUsers() {
  var raw = localStorage.getItem(USERS_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch (err) {
    return [];
  }
}

/* Save users list */
function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

/* Read who is logged in */
function getSession() {
  var raw = localStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch (err) {
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

/* Simple hash for demo only (not for real production) */
function hashPassword(pass) {
  var h = 0;
  for (var i = 0; i < pass.length; i++) {
    h = ((h << 5) - h) + pass.charCodeAt(i);
    h = h & h;
  }
  return "h" + Math.abs(h).toString(16);
}

/* Create a new account */
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

/* Check email and password, then start session */
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

/* Path helper: pages are in /pages/ so we need ../ sometimes */
function getBasePath() {
  var path = window.location.pathname;
  if (path.indexOf("/pages/") !== -1) {
    return "../";
  }
  return "";
}

/* Send user to login if not signed in */
function requireAuth() {
  if (!isLoggedIn()) {
    window.location.href = getBasePath() + "pages/login.html";
    return false;
  }
  return true;
}

/* If already logged in, go to dashboard */
function redirectIfLoggedIn() {
  if (isLoggedIn()) {
    window.location.href = getBasePath() + "pages/dashboard.html";
  }
}
