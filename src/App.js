import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <MainPage></MainPage>
            </header>
        </div>
    );
}

export default App;
