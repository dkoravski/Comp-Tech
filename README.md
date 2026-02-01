# CompTech - Multi-Page IT Services Website

A professional multi-page JavaScript application for a computer maintenance and IT services company built with Vite, Bootstrap, and vanilla JavaScript.

## 🚀 Features

- **Multi-page Architecture**: Separate HTML files for each page (Home, Services, About, Contact)
- **Modern JavaScript**: ES6 modules with clean separation of concerns
- **Responsive Design**: Bootstrap 5 with custom IT-themed styling
- **Interactive Components**: Dynamic service cards, contact form, navigation
- **Professional UI**: Clean, modern design suitable for IT service companies
- **Performance Optimized**: Vite build system for fast development and production builds

## 📁 Project Structure

```
comp-tech/
├── index.html              # Home page
├── services.html          # Services page
├── about.html             # About page
├── contact.html           # Contact page
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
├── src/
│   ├── js/
│   │   ├── components/    # Reusable UI components
│   │   │   ├── header.js
│   │   │   ├── footer.js
│   │   │   └── ContactForm.js
│   │   ├── data/         # Static data files
│   │   │   ├── services.js
│   │   │   └── team.js
│   │   ├── pages/        # Page-specific JavaScript
│   │   │   ├── home.js
│   │   │   ├── services.js
│   │   │   ├── about.js
│   │   │   └── contact.js
│   │   └── utils/        # Utility functions
│   │       └── navigation.js
│   └── styles/
│       └── main.css      # Custom CSS and theme
└── .github/
    └── copilot-instructions.md
```

## 🛠️ Technology Stack

- **Build Tool**: Vite 5.0
- **Frontend**: Vanilla JavaScript (ES6+)
- **CSS Framework**: Bootstrap 5.3.2
- **Icons**: Bootstrap Icons
- **Architecture**: Multi-page application (not SPA)

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:3000`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📄 Pages Overview

### Home Page (`index.html`)
- Hero section with company introduction
- Services preview (first 3 services)
- Why Choose Us section with key benefits
- Call-to-action buttons

### Services Page (`services.html`)
- Complete services grid with detailed information
- Service features and pricing
- Process workflow explanation
- Direct booking links to contact form

### About Page (`about.html`)
- Company history and story
- Team member profiles
- Company statistics and achievements
- Core values and mission

### Contact Page (`contact.html`)
- Contact form with validation
- Company contact information
- Business hours and location
- Map placeholder for future integration

## 🎨 Customization

### Styling
- Modify `src/styles/main.css` for custom styles
- CSS custom properties (variables) are defined at the top for easy theming
- Bootstrap can be customized by overriding variables

### Content
- Update service information in `src/js/data/services.js`
- Modify team members in `src/js/data/team.js`
- Company information is in the header and footer components

### Components
- Header and footer are modular components in `src/js/components/`
- Each page has its own JavaScript module for specific functionality
- Navigation system handles active state and smooth scrolling

## 🔧 Development Guidelines

- **No frameworks**: Uses vanilla JavaScript only (no React, Vue, Angular)
- **ES6 Modules**: Modern import/export syntax
- **Separation of Concerns**: UI, business logic, and data are separated
- **Bootstrap Components**: Leverages Bootstrap for consistent UI
- **Responsive Design**: Mobile-first approach with Bootstrap grid

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

The built application is static and can be deployed to any web server or static hosting service:

- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Traditional web hosting

After running `npm run build`, deploy the contents of the `dist/` folder.

## 📝 Notes

- Contact form includes client-side validation but needs backend integration for actual email sending
- Service booking links can be connected to a booking system
- Map section is placeholder - integrate with Google Maps or similar service
- All images are placeholder icons - replace with actual company images

## 🤝 Contributing

This is an educational project for SoftUni Software Technologies with AI course. Follow the coding standards and architectural patterns established in the codebase.

## 📄 License

This project is for educational purposes as part of the SoftUni curriculum.