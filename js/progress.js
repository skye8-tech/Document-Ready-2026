/* This file saves and loads checklist progress and admin applications */

var PROGRESS_KEY = "docready_progress";
var APPS_KEY = "docready_applications";

function getAllProgress() {
  var raw = localStorage.getItem(PROGRESS_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw);
  } catch (err) {
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

/* Progress for one service for the logged-in user */
function getServiceProgress(serviceId) {
  var session = getCurrentUser();
  if (!session) {
    return { checked: [], formSubmitted: false };
  }
  var prog = getUserProgress(session.email);
  return prog[serviceId] || { checked: [], formSubmitted: false };
}

function setServiceProgress(serviceId, data) {
  var session = getCurrentUser();
  if (!session) return;
  var prog = getUserProgress(session.email);
  prog[serviceId] = data;
  saveUserProgress(session.email, prog);
}

/* Percent complete: checked docs + form count as steps */
function calcProgressPercent(serviceId) {
  if (typeof getServiceById !== "function") return 0;
  var service = getServiceById(serviceId);
  if (!service) return 0;

  var total = service.documents.length + 1;
  var prog = getServiceProgress(serviceId);
  var done = 0;
  if (prog.checked) done = prog.checked.length;
  if (prog.formSubmitted) done = done + 1;
  return Math.round((done / total) * 100);
}

/* Save application so admin can see it */
function saveApplicationForAdmin(service, formData, checkedCount) {
  var apps = [];
  try {
    apps = JSON.parse(localStorage.getItem(APPS_KEY) || "[]");
  } catch (err) {
    apps = [];
  }

  var session = getCurrentUser();
  var serviceName = service.name;
  if (typeof L === "function") {
    serviceName = L(service, "name");
  }

  apps.unshift({
    id: Date.now(),
    userEmail: session ? session.email : "",
    userName: session ? session.name : "",
    serviceId: service.id,
    serviceName: serviceName,
    formData: formData,
    checkedCount: checkedCount,
    totalDocs: service.documents.length,
    createdAt: new Date().toISOString()
  });

  localStorage.setItem(APPS_KEY, JSON.stringify(apps));
}

function getAllApplications() {
  try {
    return JSON.parse(localStorage.getItem(APPS_KEY) || "[]");
  } catch (err) {
    return [];
  }
}
