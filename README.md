# BIONIC

A cutting-edge research project pushing the boundaries of biological and computational integration.

## React Application

The BIONIC website has been refactored to use React with Bulma CSS framework for a modern, component-based architecture.

### Prerequisites

- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```
   The application will open at http://localhost:3000

3. **Build for Production**:
   ```bash
   npm run build
   ```
   Creates an optimized production build in the `build` folder.

### Project Structure

```
BIONIC/
├── public/
│   ├── assets/
│   │   └── images/          # Logo and partner images
│   ├── index.html           # HTML template
│   └── ...
├── src/
│   ├── components/          # React components
│   │   ├── Header.js        # Navigation header
│   │   ├── Hero.js          # Hero section
│   │   ├── About.js         # About section
│   │   ├── Features.js      # Research highlights
│   │   ├── Dissemination.js # Publications section
│   │   ├── Team.js          # Team and partners
│   │   └── Footer.js        # Footer
│   ├── App.js               # Main App component
│   ├── index.js             # Entry point
│   └── index.css            # Global styles
├── package.json
└── README.md
```

### Technologies Used

- **React**: JavaScript library for building user interfaces
- **Bulma**: Modern CSS framework based on Flexbox
- **Create React App**: Build tool and development environment

### Deployment

The React application can be deployed to:
- **GitHub Pages**: Use `npm run build` and deploy the build folder
- **Netlify**: Connect repository and auto-deploy on push
- **Vercel**: Import repository for automatic deployments
- Any static hosting service that supports React apps

### Testing

Run the test suite:
```bash
npm test
```

## Features

- ⚛️ Modern React architecture with component-based design
- 🎨 Bulma CSS framework for responsive, mobile-first design
- 📱 Fully responsive layout optimized for all devices
- 🔍 SEO optimized with proper meta tags
- ⚡ Fast performance with optimized builds
- 🎯 Clean, professional aesthetic
- ♿ Accessible navigation and semantic HTML

## Original Static Version

The original static HTML version is preserved as `original-index.html` for reference.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

For Bulma documentation, visit [Bulma CSS](https://bulma.io/).
