/* English and French translations for the full interface
 *
 * How to use:
 *   t("key")           - get a UI string in the current language
 *   L(object, "field") - get object.field or object.fieldFr if language is French
 *   getLang() / setLang("fr") - read or change language (saved in localStorage)
 */

var LANG_KEY = "docready_lang";

var TRANSLATIONS = {
  en: {
    dashboard: "Dashboard",
    services: "Services",
    about: "About",
    faq: "FAQ",
    admin: "Admin",
    theme: "Theme",
    logout: "Logout",
    searchPlaceholder: "Search services...",
    allCategories: "All categories",
    apply: "Apply",
    welcomeDash: "Welcome! Track how far you have gone with each service you started.",
    servicesStarted: "Services started",
    avgProgress: "Average progress",
    formsSubmitted: "Forms submitted",
    yourProgress: "Your application progress",
    noServiceYet: "You have not started any service yet.",
    browseServices: "Browse Services",
    continueBtn: "Continue",
    loginTitle: "Welcome Back",
    loginSubtitle: "Log in to continue",
    registerTitle: "Create Account",
    registerSubtitle: "Register to access Document Ready",
    fullName: "Full Name",
    email: "Email",
    password: "Password",
    confirmPass: "Confirm Password",
    loginBtn: "Login",
    registerBtn: "Register",
    noAccount: "No account yet?",
    hasAccount: "Already have an account?",
    createOne: "Create one",
    loginHere: "Login here",
    backHome: "Back to home",
    howToPrepare: "How to prepare this document",
    officesToGo: "Offices to go to",
    saveApp: "Save application details",
    notOfficial: "This tool helps you prepare. It is not an official government application.",
    langLabel: "Language",
    signedInAs: "Signed in as",
    chooseService: "Choose a service, view required documents and track your preparation.",
    noMatch: "No services match your search.",
    yourProgLabel: "Your progress",
    overallProgress: "Overall progress",
    checklistTitle: "1. Document checklist",
    checklistHint: "Tick each document when you have prepared it. Progress is saved automatically.",
    appDetailsTitle: "2. Application details",
    appDetailsHint: "Fill this form to mark your application as prepared. Data stays on your device.",
    formAlready: "You already submitted this form. You can update it below.",
    phone: "Phone Number",
    city: "City / Town",
    notes: "Notes (optional)",
    backServices: "Back to Services",
    disclaimer: "Document Ready is for guidance only. Always confirm requirements at the official office.",
    progress: "Progress",
    docsChecked: "documents checked",
    formSubmitted: "Form submitted",
    savedMsg: "Application details saved on this device.",
    passHint: "Use a password you can remember.",
    heroTitle: "Prepare the right documents for government services in Cameroon",
    heroText: "Clear checklists, preparation tips and offices to visit for National ID, Passport, Driver's Licence and more. Create a free account to start.",
    createAccount: "Create Account",
    alreadyAccount: "Already have an account? Login",
    needAccount: "You need an account to access Services, Dashboard, About and FAQ. Register first, then log in.",
    notOfficialSite: "This is not an official government website. Information is for guidance only.",
    aboutWhatTitle: "What is Document Ready?",
    aboutWhatP1: "Document Ready is a simple website that helps people in Cameroon know which documents they need for common government services. You get a clear checklist, tips on how to prepare each document, and the offices to visit.",
    aboutWhatP2: "It is built for phones and computers. Your account and progress are stored on your own device using local storage.",
    aboutWhyTitle: "Why it exists",
    aboutWhyP: "Many people do not know the exact documents required for National ID, Passport, Driver's Licence and other services. Unclear information leads to rejected applications and extra travel. Document Ready brings the checklist and guidance into one place.",
    featChecklists: "Clear checklists",
    featChecklistsP: "See exactly what is needed for each service.",
    featOffices: "Offices to visit",
    featOfficesP: "Know where to go to prepare each document.",
    featProgress: "Progress tracking",
    featProgressP: "Tick items and watch your progress on the dashboard.",
    featLang: "English and French",
    featLangP: "Switch the interface language in the sidebar.",
    aboutDisclaimer: "Document Ready is not an official government website. Always confirm requirements at the relevant office before travelling.",
    faqIntro: "Common questions about Document Ready.",
    faq1q: "Is this an official government website?",
    faq1a: "No. Document Ready is a guidance tool only. Always confirm document lists and fees at the official office.",
    faq2q: "Where is my data stored?",
    faq2a: "Your account and progress are saved in your browser's local storage. Nothing is sent to a remote server.",
    faq3q: "Do I need to pay on this site?",
    faq3a: "No. This version has no payment or receipt features. You only prepare documents and track progress here.",
    faq4q: "How do I track my progress?",
    faq4a: "Open a service, tick the documents you have prepared, and save the application form. Your dashboard shows how far you have gone.",
    faq5q: "Can I use it on my phone?",
    faq5a: "Yes. The site is mobile-first. On small screens, hover or tap the menu button to open the side navigation.",
    faq6q: "How do I switch to French?",
    faq6a: "Use the Language dropdown in the sidebar footer. Choose Francais and the page will reload in French.",
    faq7q: "What if I forget my password?",
    faq7a: "Because data is stored only on your device, there is no password reset by email. You can create a new account on the same browser if needed.",
    faq8q: "Are the document lists complete?",
    faq8a: "Lists are based on common requirements and are for guidance. Requirements can change. Always double-check at the office.",
    adminInfo: "Applications submitted by users appear here. Data is stored in this browser's local storage.",
    totalApps: "Total applications",
    recentApps: "Recent applications",
    noAppsYet: "No applications yet.",
    serviceNotFound: "Service not found.",
    footerGuide: "Guidance only",
    footerNotOfficial: "Not an official government site",
    brandSub: "Cameroon Services",
    catIdentity: "Identity",
    catTransport: "Transport",
    catCivil: "Civil Status",
    catBusiness: "Business",
    catImmigration: "Immigration",
    catFinance: "Finance",
    catSecurity: "Security",
    catProperty: "Property"
  },
  fr: {
    dashboard: "Tableau de bord",
    services: "Services",
    about: "A propos",
    faq: "FAQ",
    admin: "Admin",
    theme: "Theme",
    logout: "Deconnexion",
    searchPlaceholder: "Rechercher un service...",
    allCategories: "Toutes les categories",
    apply: "Postuler",
    welcomeDash: "Bienvenue ! Suivez votre progression pour chaque service commence.",
    servicesStarted: "Services commences",
    avgProgress: "Progression moyenne",
    formsSubmitted: "Formulaires soumis",
    yourProgress: "Votre progression",
    noServiceYet: "Vous n'avez encore commence aucun service.",
    browseServices: "Voir les services",
    continueBtn: "Continuer",
    loginTitle: "Bon retour",
    loginSubtitle: "Connectez-vous pour continuer",
    registerTitle: "Creer un compte",
    registerSubtitle: "Inscrivez-vous pour acceder a Document Ready",
    fullName: "Nom complet",
    email: "E-mail",
    password: "Mot de passe",
    confirmPass: "Confirmer le mot de passe",
    loginBtn: "Connexion",
    registerBtn: "S'inscrire",
    noAccount: "Pas encore de compte ?",
    hasAccount: "Vous avez deja un compte ?",
    createOne: "Creer un compte",
    loginHere: "Se connecter",
    backHome: "Retour a l'accueil",
    howToPrepare: "Comment preparer ce document",
    officesToGo: "Bureaux a contacter",
    saveApp: "Enregistrer les details",
    notOfficial: "Cet outil vous aide a vous preparer. Ce n'est pas un site officiel du gouvernement.",
    langLabel: "Langue",
    signedInAs: "Connecte en tant que",
    chooseService: "Choisissez un service, consultez les documents requis et suivez votre preparation.",
    noMatch: "Aucun service ne correspond a votre recherche.",
    yourProgLabel: "Votre progression",
    overallProgress: "Progression globale",
    checklistTitle: "1. Liste des documents",
    checklistHint: "Cochez chaque document lorsque vous l'avez prepare. La progression est enregistree automatiquement.",
    appDetailsTitle: "2. Details de la demande",
    appDetailsHint: "Remplissez ce formulaire pour marquer votre demande comme preparee. Les donnees restent sur votre appareil.",
    formAlready: "Vous avez deja soumis ce formulaire. Vous pouvez le mettre a jour ci-dessous.",
    phone: "Numero de telephone",
    city: "Ville",
    notes: "Notes (optionnel)",
    backServices: "Retour aux services",
    disclaimer: "Document Ready est uniquement un guide. Confirmez toujours les exigences aupres du bureau officiel.",
    progress: "Progression",
    docsChecked: "documents coches",
    formSubmitted: "Formulaire soumis",
    savedMsg: "Details de la demande enregistres sur cet appareil.",
    passHint: "Utilisez un mot de passe dont vous vous souviendrez.",
    heroTitle: "Preparez les bons documents pour les services publics au Cameroun",
    heroText: "Listes claires, conseils de preparation et bureaux a contacter pour la CNI, le passeport, le permis de conduire et plus. Creez un compte gratuit pour commencer.",
    createAccount: "Creer un compte",
    alreadyAccount: "Vous avez deja un compte ? Connexion",
    needAccount: "Vous devez avoir un compte pour acceder aux Services, Tableau de bord, A propos et FAQ. Inscrivez-vous d'abord, puis connectez-vous.",
    notOfficialSite: "Ceci n'est pas un site officiel du gouvernement. Les informations sont fournies a titre indicatif uniquement.",
    aboutWhatTitle: "Qu'est-ce que Document Ready ?",
    aboutWhatP1: "Document Ready est un site simple qui aide les personnes au Cameroun a connaitre les documents necessaires pour les services publics courants. Vous obtenez une liste claire, des conseils de preparation et les bureaux a contacter.",
    aboutWhatP2: "Il est concu pour les telephones et les ordinateurs. Votre compte et votre progression sont stockes sur votre appareil via le stockage local.",
    aboutWhyTitle: "Pourquoi il existe",
    aboutWhyP: "Beaucoup de personnes ne connaissent pas les documents exacts requis pour la CNI, le passeport, le permis et d'autres services. Des informations floues menent a des refus et a des deplacements inutiles. Document Ready rassemble la liste et les conseils en un seul endroit.",
    featChecklists: "Listes claires",
    featChecklistsP: "Voyez exactement ce qui est necessaire pour chaque service.",
    featOffices: "Bureaux a contacter",
    featOfficesP: "Sachez ou aller pour preparer chaque document.",
    featProgress: "Suivi de progression",
    featProgressP: "Cochez les elements et suivez votre progression sur le tableau de bord.",
    featLang: "Anglais et francais",
    featLangP: "Changez la langue de l'interface dans la barre laterale.",
    aboutDisclaimer: "Document Ready n'est pas un site officiel du gouvernement. Confirmez toujours les exigences aupres du bureau competent avant de vous deplacer.",
    faqIntro: "Questions frequentes sur Document Ready.",
    faq1q: "Est-ce un site officiel du gouvernement ?",
    faq1a: "Non. Document Ready est uniquement un outil d'orientation. Confirmez toujours les listes de documents et les frais aupres du bureau officiel.",
    faq2q: "Ou sont stockees mes donnees ?",
    faq2a: "Votre compte et votre progression sont enregistres dans le stockage local de votre navigateur. Rien n'est envoye a un serveur distant.",
    faq3q: "Dois-je payer sur ce site ?",
    faq3a: "Non. Cette version n'a ni paiement ni recu. Vous preparez uniquement les documents et suivez votre progression ici.",
    faq4q: "Comment suivre ma progression ?",
    faq4a: "Ouvrez un service, cochez les documents prepares et enregistrez le formulaire. Votre tableau de bord montre votre avancement.",
    faq5q: "Puis-je l'utiliser sur mon telephone ?",
    faq5a: "Oui. Le site est concu pour le mobile. Sur petit ecran, survolez ou appuyez sur le bouton menu pour ouvrir la navigation laterale.",
    faq6q: "Comment passer en francais ?",
    faq6a: "Utilisez le menu Langue en bas de la barre laterale. Choisissez Francais et la page se rechargera en francais.",
    faq7q: "Que faire si j'oublie mon mot de passe ?",
    faq7a: "Comme les donnees sont uniquement sur votre appareil, il n'y a pas de reinitialisation par e-mail. Vous pouvez creer un nouveau compte sur le meme navigateur si besoin.",
    faq8q: "Les listes de documents sont-elles completes ?",
    faq8a: "Les listes sont basees sur des exigences courantes et servent de guide. Les exigences peuvent changer. Verifiez toujours au bureau.",
    adminInfo: "Les demandes soumises par les utilisateurs apparaissent ici. Les donnees sont stockees dans le stockage local de ce navigateur.",
    totalApps: "Total des demandes",
    recentApps: "Demandes recentes",
    noAppsYet: "Aucune demande pour le moment.",
    serviceNotFound: "Service introuvable.",
    footerGuide: "A titre indicatif uniquement",
    footerNotOfficial: "Pas un site officiel du gouvernement",
    brandSub: "Services Cameroun",
    catIdentity: "Identite",
    catTransport: "Transport",
    catCivil: "Etat civil",
    catBusiness: "Entreprise",
    catImmigration: "Immigration",
    catFinance: "Finance",
    catSecurity: "Securite",
    catProperty: "Foncier"
  }
};

function getLang() {
  return localStorage.getItem(LANG_KEY) || "en";
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
}

function t(key) {
  var lang = getLang();
  var dict = TRANSLATIONS[lang] || TRANSLATIONS.en;
  return dict[key] || TRANSLATIONS.en[key] || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    var key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-placeholder");
    if (key) el.placeholder = t(key);
  });
  document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
    var key = el.getAttribute("data-i18n-html");
    if (key) el.innerHTML = t(key);
  });
}

/* Pick English or French field from a service or document object */
function L(obj, field) {
  if (!obj) return "";
  var lang = getLang();
  if (lang === "fr" && obj[field + "Fr"]) return obj[field + "Fr"];
  return obj[field] || "";
}

function categoryLabel(cat) {
  var map = {
    "Identity": "catIdentity",
    "Transport": "catTransport",
    "Civil Status": "catCivil",
    "Business": "catBusiness",
    "Immigration": "catImmigration",
    "Finance": "catFinance",
    "Security": "catSecurity",
    "Property": "catProperty"
  };
  var key = map[cat];
  return key ? t(key) : cat;
}
