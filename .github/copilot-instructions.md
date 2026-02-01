# Project-wide AI Agent Instructions

## General Guidelines
- This is a multi-page JavaScript application (NOT a SPA).
- Each page must be implemented as a separate HTML file.
- Avoid popup-based navigation for core features.
- Do NOT use frameworks such as React, Vue or Angular.
- Do NOT use TypeScript.

## Architecture
- Use Vite and npm for project structure.
- Keep code modular and split by responsibility.
- Avoid monolithic JavaScript files.
- Separate UI logic, business logic, and services.
- No inline JavaScript inside HTML files.

## JavaScript
- Use modern ES modules (import/export).
- Prefer small, reusable functions.
- Keep authentication, database, and storage logic in separate files.
- Use async/await for all Supabase interactions.

## Supabase Usage
- Use Supabase Auth for user authentication.
- Implement role-based access control (client, staff, admin).
- Use Supabase Database for all persistent data.
- Use Supabase Storage for file uploads.
- Validate permissions before any database operation.

## UI & Styling
- Use Bootstrap for layout and UI components.
- Keep UI clean and functional.
- Avoid unnecessary animations or visual complexity.
- All pages must be usable without JavaScript errors.

## Security & Best Practices
- Do not expose secret keys in the frontend.
- Validate user input before sending to Supabase.
- Protect admin and staff pages from unauthorized access.

## Code Quality
- Prefer readability over clever code.
- Use meaningful variable and function names.
- Add comments only where logic is non-obvious.

---

**Technology Stack:** Vite + Vanilla JavaScript + Bootstrap + Supabase
**Target Audience:** SoftUni students learning Software Technologies with AI