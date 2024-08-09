import '@testing-library/jest-dom';

// Mock requestAnimationFrame
global.requestAnimationFrame = callback => setTimeout(callback, 0);
