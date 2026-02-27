# BIONIC

A cutting-edge research project pushing the boundaries of biological and computational integration.

## Architecture

The BIONIC website is a **Jekyll** static site using the [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/) theme, with a separate React application in the `frontend/` directory for interactive network visualisation.

### Project Structure

```
bionic-sps.github.io/
├── _config.yml              # Jekyll site configuration
├── _data/                   # Site data (navigation, network, UI text)
├── _includes/               # Jekyll template partials
│   ├── head/custom.html     # Custom <head> content
│   ├── footer/custom.html   # Custom footer content
│   └── network_cards.html   # Partner network card layout
├── _pages/                  # Site pages (contact, network, research)
├── assets/
│   ├── css/main.scss        # Custom styles
│   ├── images/              # Logo and partner images
│   └── react/               # Built output from the frontend app
├── frontend/                # Vite + React app (network visualisation)
│   ├── src/
│   │   ├── main.jsx         # React entry point
│   │   ├── main.css         # App styles
│   │   └── network/
│   │       └── Network.jsx  # Network visualisation component
│   ├── vite.config.js       # Vite build configuration
│   └── package.json         # Frontend dependencies
├── index.md                 # Homepage content
├── Gemfile                  # Ruby / Jekyll dependencies
└── README.md
```

### Prerequisites

- **Jekyll site**: Ruby and Bundler (`gem install bundler`)
- **Frontend app**: Node.js 16+ and npm

### Local Development

#### Jekyll site

```bash
bundle install
bundle exec jekyll serve
```

The site will be available at http://localhost:4000.

#### Frontend React app (network visualisation)

```bash
cd frontend
npm install
npm run build   # outputs to ../assets/react/
```

### Technologies Used

- **Jekyll** with the Minimal Mistakes remote theme
- **React 18** + **Vite** for the network visualisation widget
- **GitHub Pages** for hosting

### Deployment

The site is deployed automatically to GitHub Pages on every push to the default branch. The `frontend/` directory is excluded from Jekyll processing; its built output in `assets/react/` is included instead.

## Features

- 📄 Jekyll-powered static site with Minimal Mistakes theme
- 🌐 Interactive partner network visualisation (React + Vite)
- 📱 Fully responsive, mobile-first layout
- 🎯 Clean, professional academic aesthetic
