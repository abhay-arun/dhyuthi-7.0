# Dhyuthi 7.0 — Design Documentation

## 1. Design Direction

Dhyuthi 7.0 uses a dark, modern, technology-oriented visual direction. The interface is intentionally typography-led, with strong contrast, generous spacing, subtle borders, blue/cyan accents, geometric details, and restrained motion.

The visual system is designed to feel like an event identity rather than a generic information page. The layout uses large section headings, numbered sections, structured cards, and repeated visual patterns to create continuity throughout the page.

## 2. Colour System

The main colours defined in `src/styles.css` are:

| Token | Value | Purpose |
|---|---|---|
| `--bg` | `#111820` | Main page background |
| `--surface` | `#0a0a0a` | Dark surface colour |
| `--surface-light` | `#101010` | Lighter surface variation |
| `--blue` | `#00629b` | Primary IEEE Blue accent |
| `--text` | `#ffffff` | Main text |
| `--text-muted` | `#999999` | Secondary text |
| `--text-dim` | `#777777` | Supporting text |
| `--border` | `rgba(255,255,255,0.1)` | Subtle borders |

The hero and other interface elements additionally use `#00B5E2` as a brighter cyan accent.

## 3. Typography

The website uses Calibri with Arial as a fallback. Large, bold, uppercase typography is used for the Dhyuthi 7.0 identity and major headings, while muted text is used for supporting information.

Large headings use responsive CSS `clamp()` sizing so that the visual hierarchy remains strong across screen sizes.

## 4. Layout and Visual Hierarchy

The page is organised into numbered sections:

1. About
2. Highlights / Events
3. Tracks
4. Schedule
5. Pre-Events
6. Gallery
7. FAQ
8. Venue
9. Contact

The navbar provides access to the primary sections, while the mobile menu exposes the additional sections. The footer provides another navigation path.

Section labels such as `01 — ABOUT` and `02 — HIGHLIGHTS` establish a consistent editorial structure.

## 5. Hero

The hero is a full-viewport opening section centred around the Dhyuthi 7.0 wordmark. 

It includes:

- IEEE SCT Student Branch presentation label
- Large `DHYUTHI 7.0` title
- Event tagline
- `Explore Events` call-to-action
- `Discover Dhyuthi` call-to-action
- Radial blue lighting effects
- A subtle grid texture
- A rotated geometric border element

## 6. Cards and Interactive Elements

Event and track content is presented using reusable card components. Cards use borders, dark surfaces, numbered labels, and hover movement.

The gallery uses a carousel interaction with previous/next controls and indicator dots.

The FAQ uses expandable accordion items. Opening an item reveals its answer and rotates the plus icon into a close-style indicator.

The venue includes an embedded Google Maps view and an external `Open in Maps` action.

## 7. Motion

Motion is deliberately subtle. The project uses:

- Scroll-based section reveals using `IntersectionObserver`
- Card entrance animations
- Hover translation on cards and buttons
- Border and background transitions
- Gallery control transitions
- FAQ expansion and icon rotation

These effects are intended to add feedback without distracting from the content.

## 8. Responsive Design

A mobile breakpoint at `768px` changes the layout for smaller screens. The desktop navigation is replaced by a menu button, multi-column card layouts become single-column layouts, hero buttons stack vertically, and the gallery/map/contact layouts are adjusted for smaller viewports.

The design also uses fluid typography and percentage-based horizontal spacing so that intermediate viewport sizes remain usable.

## 9. Branding Assets

The project stores the supplied white IEEE and IEEE SCT Student Branch logos in `public/brand/`. They are referenced directly from the public asset path.

No separate official Dhyuthi 7.0 logo asset is used; the event identity is represented through styled text in the interface.

## 10. Content Status

Some event-specific information is intentionally represented as placeholder or announcement-ready content because official Dhyuthi 7.0 details were not available during development. Examples include track names, pre-event details, and gallery images. These areas are structured so official content can be substituted without changing the overall layout.