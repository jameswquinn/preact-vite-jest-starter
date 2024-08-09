# Preact Vite Jest Template

This is a template for setting up a Preact project with Vite as the build tool and Jest for testing. It provides a solid foundation for building modern, performant web applications with a great developer experience.

## Features

- [Preact](https://preactjs.com/) for building efficient user interfaces
- [Vite](https://vitejs.dev/) for lightning-fast development and optimized builds
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/) for robust testing
- [Babel](https://babeljs.io/) for transpiling modern JavaScript

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/preact-vite-jest-template.git
   cd preact-vite-jest-template
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev`: Start the development server
- `npm run build`: Build for production
- `npm run preview`: Preview the production build
- `npm test`: Run tests
- `npm run test:watch`: Run tests in watch mode
- `npm run test:coverage`: Run tests with coverage report

## Project Structure

```
preact-vite-jest-template/
├── src/
│   ├── components/
│   │   └── HelloWorld.jsx
│   └── index.jsx
├── tests/
│   ├── HelloWorld.test.jsx
│   └── setup.js
├── .gitignore
├── babel.config.cjs
├── index.html
├── jest.config.cjs
├── package.json
├── README.md
└── vite.config.js
```

## API Documentation

### Components

#### HelloWorld

A simple component that renders "Hello, World!".

Usage:
```jsx
import { HelloWorld } from './components/HelloWorld';

function App() {
  return <HelloWorld />;
}
```

Props: None

### Hooks

This template doesn't include any custom hooks out of the box, but you can use all of Preact's built-in hooks. Here's an example of using the `useState` hook:

```jsx
import { h } from 'preact';
import { useState } from 'preact/hooks';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```

## FAQ

### Q: Why use Preact instead of React?

A: Preact is a lightweight alternative to React with a nearly identical API. It's smaller in size (about 3KB gzipped), which can lead to faster load times and better performance, especially on mobile devices or in areas with slower internet connections.

### Q: How do I add routing to this template?

A: You can use [Preact Router](https://github.com/preactjs/preact-router). Install it with `npm install preact-router`, and then use it in your app like this:

```jsx
import { h } from 'preact';
import { Router } from 'preact-router';
import Home from './routes/home';
import About from './routes/about';

const App = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
  </Router>
);
```

### Q: Can I use this template for a production application?

A: Yes, this template provides a solid foundation for a production Preact application. However, you may want to add additional features like state management (e.g., Redux), styling solutions (e.g., CSS Modules or Styled Components), and potentially server-side rendering depending on your specific needs.

### Q: How do I deploy this application?

A: After running `npm run build`, you can deploy the contents of the `dist` directory to any static file hosting service. Some popular options include:
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)

### Q: How do I add TypeScript support?

A: To add TypeScript support:

1. Install necessary dependencies:
   ```
   npm install --save-dev typescript @types/jest
   ```

2. Rename your `.js` and `.jsx` files to `.ts` and `.tsx` respectively.

3. Create a `tsconfig.json` file in the root directory:
   ```json
   {
     "compilerOptions": {
       "target": "ESNext",
       "useDefineForClassFields": true,
       "lib": ["DOM", "DOM.Iterable", "ESNext"],
       "allowJs": false,
       "skipLibCheck": true,
       "esModuleInterop": false,
       "allowSyntheticDefaultImports": true,
       "strict": true,
       "forceConsistentCasingInFileNames": true,
       "module": "ESNext",
       "moduleResolution": "Node",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx",
       "jsxImportSource": "preact"
     },
     "include": ["src"],
     "references": [{ "path": "./tsconfig.node.json" }]
   }
   ```

4. Update your `vite.config.js` to `vite.config.ts`.

5. Update your Jest configuration to handle TypeScript files.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
