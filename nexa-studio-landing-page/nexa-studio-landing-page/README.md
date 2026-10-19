# Nexa Studio Landing Page

A responsive, mobile-first agency landing page built with semantic HTML5, Tailwind CSS, and vanilla JavaScript.

## Features
- Semantic sections and skip-to-content link
- Sticky, responsive navigation with accessible mobile menu
- Light/dark theme toggle saved in `localStorage`
- Responsive hero, service cards, process section, testimonials, and contact form
- Client-side validation for name, email, service, and message
- Keyboard focus states and reduced-motion support
- Static deployment-ready structure

## Run locally
This is a static site. Open `index.html` in a browser, or use VS Code's Live Server extension.

## Deploy with GitHub Pages
1. Create a public GitHub repository, for example `nexa-studio-landing-page`.
2. Upload `index.html`, `script.js`, and `README.md` to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/(root)`, then save.
6. Wait for the Pages URL to appear in the same settings section.

## Before submitting
- Replace the demo testimonials with genuine testimonials or clearly keep them labelled as demo content.
- Test the site at mobile and desktop widths.
- Check theme toggle, mobile navigation, and form validation.
- Add your repository URL to your internship submission form.

## Important note about the contact form
The form currently performs client-side validation only. It does not send email or persist submissions. A backend or form service is required to receive real enquiries.

## Tailwind note
Tailwind's Play CDN is used to make this project easy to run and publish as a static site. For a production project, use Tailwind's build process as described in the official documentation.
