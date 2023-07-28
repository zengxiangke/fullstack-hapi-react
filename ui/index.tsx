import { createRoot } from 'react-dom/client';
import App from './app';

const root = createRoot(
  // container
  document.getElementById('app')
);

root.render(
  // app
  <App />
);
