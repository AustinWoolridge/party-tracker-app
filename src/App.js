import React from 'react';
import './App.css';
import ParentComponent from './ParentComponent';
import PartyMoodComponent from './PartyMoodComponent';

function App() {
    return (
        <div className="App">
            <h1>Welcome to the Party!</h1>
            <ParentComponent />
            <PartyMoodComponent />
        </div>
    );
};

export default App;