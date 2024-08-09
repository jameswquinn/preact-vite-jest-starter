# Preact Vite Jest Starter

A modern, lightweight starter template for Preact projects with Vite and Jest. Fast development, optimized builds, and robust testing out of the box.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/preact-vite-jest-starter)

## Features

- [Preact](https://preactjs.com/) for building efficient user interfaces
- [Vite](https://vitejs.dev/) for lightning-fast development and optimized builds
- [Jest](https://jestjs.io/) and [Testing Library](https://testing-library.com/) for robust testing
- [Babel](https://babeljs.io/) for transpiling modern JavaScript

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/preact-vite-jest-starter.git
   cd preact-vite-jest-starter
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
preact-vite-jest-starter/
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
├── vercel.json
└── vite.config.js
```

## Deployment

This project is set up for easy deployment to Vercel. Simply click the "Deploy" button at the top of this README to create a new project directly from this template.

For other deployment options, refer to the [Vite deployment guide](https://vitejs.dev/guide/static-deploy.html).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
