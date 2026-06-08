import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';

import './styles/global.css';

/**
 * Bootstrap the React application.
 */
function bootstrap() {
    const rootElement = document.getElementById('root');
    if (!rootElement) {
        throw new Error('Root element #root not found in index.html.');
    }

    const root = createRoot(rootElement);
    root.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
    );
}

bootstrap();
