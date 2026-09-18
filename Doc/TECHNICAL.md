# Dhyuthi 7.0 — Technical Documentation

## 1. Technology Stack

- React 19
- JavaScript (ES modules)
- CSS
- Vite 8
- Lucide React for interface icons
- ESLint for code-quality checks

The project is a frontend-only React application. No backend or database is currently implemented.

## 2. Application Structure

The main application entry is `src/App.jsx`. It composes the page from reusable components:

src/
├── components/
│   ├── Navbar.jsx
│   ├── EventCard.jsx
│   ├── TrackCard.jsx
│   ├── PreEvents.jsx
│   ├── Gallery.jsx
│   ├── FAQ.jsx
│   ├── Venue.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── Reveal.jsx
├── assets/
│   └── hero.png
├── App.jsx
├── App.css
├── index.css
├── main.jsx
└── styles.css

public/
└── brand/
    ├── ieee-white.png
    └── sct-sb-white.png

`App.jsx` is responsible for page composition, while repeated or interactive interface elements are separated into components.

## 3. Reusable Components

### EventCard

`EventCard` receives `number`, `title`, and `description` as props. This allows multiple event cards to share one implementation.

### TrackCard

`TrackCard` similarly receives `number`, `title`, and `description`. The component also provides a consistent arrow affordance.

### Navbar

`Navbar` uses React `useState` to control the mobile navigation menu. `Menu` and `X` icons are imported from Lucide React. Clicking a mobile navigation link closes the menu.

### Gallery

`Gallery` uses `useState` to store the current image index. Previous, next, and indicator-dot controls update this state. The index wraps around using modulo arithmetic.

The current array contains placeholder labels (`Image 1`, `Image 2`, and `Image 3`) ready to be replaced with official gallery assets.

### FAQ

`FAQ` stores the currently open question index in React state. Clicking a question toggles its open/closed state. The answer visibility is handled with CSS grid-row transitions.

### Reveal

`Reveal` uses `useRef`, `useEffect`, and the browser `IntersectionObserver` API. When the wrapped content enters the viewport, the `revealed` class is added and the observer stops watching that element.

### Venue

`Venue` contains a Google Maps iframe for the SCT Campus and an external link that opens the location in Google Maps.

## 4. Styling Architecture

Most custom styling is contained in `src/styles.css`. The file defines global rules, design tokens, component styles, animation rules, and the mobile breakpoint.

CSS custom properties are used for repeated design values such as the background, text colours, accent colour, borders, and radius. This makes future event branding changes easier to apply consistently.

The project still contains the original Vite starter `src/index.css` and `src/App.css` files. The active Dhyuthi styling is primarily defined in `src/styles.css`; these starter files can be cleaned up later if desired.

## 5. Navigation

The site uses hash-based anchor navigation such as `#about`, `#events`, and `#contact`. `html { scroll-behavior: smooth; }` provides smooth scrolling.

The Dhyuthi logo in the navbar links to `#top`, which is placed on the main page wrapper.

## 6. Responsive Behaviour

The main responsive breakpoint is `max-width: 768px`. At this size:

- Desktop navigation links are hidden.
- The hamburger menu button is displayed.
- Hero buttons become vertically stacked.
- Event and pre-event grids become single-column layouts.
- Track and schedule layouts are simplified.
- Gallery controls become smaller.
- Venue content becomes a single-column layout.
- Contact links stack vertically.
- Footer content changes to a vertical layout.

## 7. External Integrations

The current frontend has two external integrations:

1. Google Maps embed in the Venue section.
2. A `mailto:` link targeting `ieeesctsb@gmail.com`.

The IEEE SCT Student Branch button links to `https://ieeesctsb.org`.

## 8. Build and Development

Install dependencies with:

npm install

Start the Vite development server with:

npm run dev

Create a production build with:

npm run build

Run ESLint with:

npm run lint

Preview the production build with:

npm run preview

On Windows PowerShell, if the `npm` command is blocked by the shell execution policy, the equivalent commands can be run using `npm.cmd`.

## 9. Production Build

A `dist/` directory is included in the supplied project archive and contains the generated Vite production output. The source code remains the primary development source; `dist/` is generated build output.

## 10. AI-Assisted Development

AI tools were used for implementation support, debugging, styling, component creation, and iteration. The final implementation was reviewed and adapted during development rather than being treated as an unmodified generated output.

## 11. Future Extension

The current implementation is intentionally frontend-only. A future backend could provide dynamic event data, registrations, schedules, gallery content, and administrative content management. The existing component structure provides clear locations for replacing hard-coded content with API-driven data later.