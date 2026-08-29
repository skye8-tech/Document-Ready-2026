# Document Ready

**A checklist and application helper for common government services in Cameroon**

**Hosted project:** [https://document-ready.netlify.app/](https://document-ready.netlify.app/)

---

## Project description

Document Ready is a simple, mobile-friendly website that helps people in Cameroon prepare the right documents for common government services such as National ID, Passport, Driver’s Licence, Birth Certificate, Business Registration and more.

Users create an account, choose a service, follow a document checklist with tips on **how to prepare** each item and **which offices to visit**, save basic application details, and track their progress on a personal dashboard.

The interface is available in **English and French**. The site is **not an official government website**. Information is for guidance only.

**Author:** Ajeck Brightney Motale  
**Track:** Frontend Development  
**Organization:** Skye8 Company LTD  
**Supervisor:** Engr. Lionel A.

---

## Problem being solved

Many people do not know the exact documents required for government services, the correct format, or which office to go to. This leads to:

- Rejected or incomplete applications  
- Extra travel and transport costs  
- Repeated visits to the same office  
- Extra difficulty for first-time applicants and people who live far from offices  

Document Ready gives a clear checklist **before** the user travels.

---

## Key features

- User **register** and **login** (data stored in the browser)  
- Password show / hide  
- **12 government services** with search and category filter  
- Document **checklist** with tips, how-to guidance, and offices to visit  
- **Progress tracking** on the user dashboard  
- **English / French** language switch  
- **Light / dark** mode  
- Responsive design (phone, tablet, desktop)  
- Sidebar navigation (opens on mobile via menu / hover)  
- About and FAQ pages  
- **Admin** page to view applications saved on the same browser (demo password: `admin123`)  
- No payment module (guidance only)

---

## Technologies used

| Layer | Technology | Purpose |
|--------|------------|---------|
| Structure | HTML5 | Pages and forms |
| Design | CSS3 | Layout, theme, responsive UI |
| Logic | JavaScript | Auth, checklist, progress, UI |
| Data | localStorage | Users, session, progress |
| Version control | Git + GitHub | Source code history |
| Hosting | Netlify | Public live site |

**Main JS files**

- `auth.js` – register, login, logout, session  
- `progress.js` – checklist progress and admin applications  
- `ui.js` – sidebar, top bar, footer, theme  
- `lang.js` – English / French text  
- `services-data.js` – list of 12 services  
- `main.js` – small helpers

---

## Installation / setup

No build tools or npm install are required.

### Option 1 – Open locally

1. Download or clone this repository.  
2. Open `index.html` in a modern browser (Chrome, Firefox, Edge).  

### Option 2 – Simple local server (recommended)

bash
# From the project folder
npx serve .
# or
python3 -m http.server 5500

---

## How to use the app

1. Open the site and **Create Account**.  
2. **Login** with your email and password.  
3. Go to **Services**, search or filter, click **Apply**.  
4. Tick documents as you prepare them; read how-to and offices.  
5. Save application details.  
6. Check progress on the **Dashboard**.  
7. (Optional) Open **Admin** with password `admin123` to see saved applications on this browser.

---

## Important notes

- This is **not** an official government website.  
- Document lists are for **guidance only**; always confirm at the official office.  
- Data is stored in **localStorage** on the user’s device (not synced across phones/computers).  
- There is **no payment** or real government submission in this version.  
- Admin applications are visible only in the **same browser** where the user saved the form.

---

## Licence / academic use

Developed as a **Final Internship Project** for the Frontend Development track at **Skye8 Company LTD** (2026).
