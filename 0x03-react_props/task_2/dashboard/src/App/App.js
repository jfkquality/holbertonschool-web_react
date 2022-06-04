import React from 'react';
import logo from '../assets/logo.jpg';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <main className="App-body">
          <Login />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
