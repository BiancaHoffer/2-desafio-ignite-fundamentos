import { createRoot } from 'react-dom/client'
import { App } from './App';

const container = document.getElementById('root');
const root = createRoot(container!); //container! for TypeScript
root.render(<App />)