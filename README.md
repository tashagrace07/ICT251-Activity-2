# Natasha Grace Mulenga — Personal Portfolio

A responsive, interactive personal website built for the ICT251 Web Technologies module (Activity 3) at Mulungushi University.

## Live Site

🔗 **Live URL:** PASTE-YOUR-RENDER-URL-HERE

## About

This site is my personal student portfolio, showcasing:
- About Me
- My Hobbies
- My Learning Plan
- My Projects (expandable)
- My Photos (gallery viewer)
- My Media (video + audio)
- Contact (validated form)

Built with **semantic HTML5, external CSS and vanilla JavaScript** — no frameworks, no build step.

## JavaScript Features (4 total)

### 1. Contact Form Validation and Preview (compulsory)
- Validates name, email and message on submit.
- Rejects whitespace-only names/messages and incorrectly formatted emails.
- Shows clear inline error messages next to each field.
- When valid, displays an on-page preview saying the data was **validated, not sent**.
- Uses `event.preventDefault()` — no server, no database.

### 2. Expandable Project Details
- Each project card has a **Show details / Hide details** button.
- Toggles `hidden` on the details block.
- Updates `aria-expanded` for accessibility.

### 3. Photo Gallery Viewer
- **Previous / Next** buttons cycle through 4 photos.
- Wraps correctly: last → first, first → last.
- Updates the image, alt text, caption and a "Photo X of 4" status.

### 4. Theme Switch (Light / Dark)
- Button in the header toggles a `dark-theme` class on `<body>`.
- Choice is saved in `localStorage` and restored on reload.
- Both themes keep text and controls readable.

## How to Test Locally

1. Clone or download the repository.
2. Open `index.html` with **VS Code Live Server** (or any local server).
3. Open DevTools (F12) → Console → confirm no errors.
4. Test each feature:
   - **Form:** submit empty → errors; submit valid → preview appears.
   - **Projects:** click **Show details** → details expand; click again → collapse.
   - **Gallery:** click **Next** 4× → wraps to Photo 1; click **Previous** from Photo 1 → wraps to Photo 4.
   - **Theme:** click **Dark Mode** → page turns dark; reload → still dark; click **Light Mode** → back to light.
5. Resize to **375 px** and **1280 px** — layout should stay readable with no sideways scrolling.

## Project Structure