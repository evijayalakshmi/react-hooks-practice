import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainPage from './components/MainPage';
import { UserProvider } from './UserContext';

function App() {
    const user = { name: "Lakshmi", loggedIn: true };

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <UserProvider value={user}>
                    <MainPage></MainPage>
                </UserProvider>
            </header>
        </div>
    );
}

export default App;
