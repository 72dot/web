import React from 'react';
import './App.css'; // Optional: import CSS file

function App() {
  const user = 'Developer';

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, {user}!</h1>
        <p>
          This is a basic React component using JSX.
        </p>
        {/* A simple component can be nested here */}
        <WelcomeMessage /> 
      </header>
    </div>
  );
}

// A separate, simple functional component
function WelcomeMessage() {
  return <p>Welcome to your first React app.</p>;
}

export default App;