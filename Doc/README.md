# Dhyuthi 7.0 — Official Event Website

## Overview

Dhyuthi 7.0 is the flagship event website developed for IEEE SCT Student Branch. The project focuses on a visually distinctive, responsive, and reusable frontend experience for the upcoming event.

The interface uses a dark, modern, technology-oriented visual identity with strong typography, structured spacing, IEEE Blue accents, geometric details, and subtle motion.

## Features

- Responsive desktop, tablet, and mobile layouts
- Section-based smooth navigation
- Responsive mobile navigation menu
- Dhyuthi 7.0 hero section
- Events / highlights cards
- Tracks section
- Schedule section
- Pre-events section
- Interactive gallery carousel
- FAQ accordion
- Google Maps venue embed
- Contact actions
- Footer navigation
- Scroll reveal animations
- Card entrance and hover interactions
- Reusable React components

## Technology Stack

- React
- JavaScript
- HTML
- CSS
- Vite
- Lucide React

## Project Structure

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

Doc/
├── README.md
├── DESIGN.md
└── TECHNICAL.md

## Running the Project Locally

Install dependencies:

npm install

Start the development server:

npm run dev

Vite will provide a local URL in the terminal.

## Development Approach

The website was developed using a component-based React structure. Reusable components were created for repeated interface patterns such as event cards and track cards, while interactive sections use React state where required.

AI-assisted development was used for implementation support, debugging, styling, and iteration. The final code was reviewed and adapted during development.

## Design

The visual direction uses a dark interface with IEEE Blue and cyan accents, large typography, structured spacing, subtle borders, geometric effects, and restrained motion.

Detailed design decisions are documented in DESIGN.md

## Technical Implementation

The React component structure, state-driven interactions, styling architecture, responsive implementation, build commands, and future extension approach are documented in TECHNICAL.md

## Project Status

The frontend implementation is complete. Some event-specific information and assets remain placeholders because official Dhyuthi 7.0 details were not available during development. These areas are structured for later replacement.

## Credits

Developed for IEEE SCT Student Branch and the Dhyuthi 7.0 event.

IEEE branding assets are used according to the applicable IEEE brand guidelines.