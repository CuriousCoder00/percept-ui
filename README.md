# Percept-UI Documentation

## Introduction

Welcome to **Percept-UI**, a comprehensive React component library designed to enhance your web applications with high-quality, accessible, and customizable UI components. Whether you're building a simple website or a complex web application, Percept-UI offers a variety of components to meet your needs.

### Why Percept-UI?

- **Customizable**: Easily adapt the components to fit your design requirements.
- **Accessible**: Built with accessibility in mind to ensure your application is usable by everyone.
- **Lightweight**: Focused on performance, Percept-UI components are optimized to load quickly.
- **Well-documented**: Comprehensive documentation to help you integrate components seamlessly.

## Installation

To start using Percept-UI in your React project, follow these steps:

### 1. Install the package

First, you'll need to install `percept-ui` via npm or yarn.

```bash
npm install percept-ui
```

or

```bash
yarn add percept-ui
```

### 2. Import `style.css` file

You need to import `style.css` file in order to use applied css styles in components or you can use `TaiilwindCSS`

```bash
import '@percept-ui/style.css'
```

### 3. Import and Use Components

Once installed, you can start importing and using Percept-UI components in your project:

```code
import { Button } from 'percept-ui';

function App() {
  return (
    <div>
      <Button variant="solid" color="blue">
        Click Me
      </Button>
    </div>
  );
}

export default App;
```

Now you're all set to start building with Percept-UI!