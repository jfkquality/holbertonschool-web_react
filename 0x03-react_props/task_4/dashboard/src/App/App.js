import React from 'react';
import logo from '../assets/logo.jpg';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer';
import PropTypes, { bool } from 'prop-types';

function App(props) {
  let loggedIn = <Login />;
  if (props.isLoggedIn) {
    loggedIn = <CourseList />;
  }
  return (
    <React.Fragment>
      <Notifications />
      <div className="App">
        <Header />
        <main className="App-body">
          {loggedIn}
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
