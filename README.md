# Document Ready 4

Beginner-friendly checklist website for government services in Cameroon.

## File map (easy to find things)

| File | What it does |
|------|----------------|
| js/auth.js | Register, login, logout, session |
| js/progress.js | Checklist progress and admin applications |
| js/ui.js | Sidebar, top bar, footer, theme (DOM methods) |
| js/i18n.js | English / French text |
| js/services-data.js | The 12 services and documents |
| js/main.js | Password toggle, auth language select |

## Features

- Register / login (localStorage), show-hide password
- Sidebar nav, hover open on mobile
- Light / dark mode
- English / French
- 12 services with search and filter
- Checklist + how to prepare + offices
- User dashboard progress
- Admin list (password: admin123)

## How to run

https://document-ready.netlify.app/

## Scripts on each page (order)

1. services-data.js (if needed)
2. auth.js
3. progress.js (if needed)
4. i18n.js
5. ui.js
6. main.js
