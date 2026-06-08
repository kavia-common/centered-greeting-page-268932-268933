import React from 'react';

import GreetingCard from './components/GreetingCard';

/**
 * Main application component for the centered greeting page.
 *
 * @return {JSX.Element} Rendered application.
 */
function App() {
    return (
        <main className="AppRoot">
            <GreetingCard
                title="Hello there"
                subtitle="Welcome to your clean, minimal greeting page."
            />
        </main>
    );
}

export default App;
