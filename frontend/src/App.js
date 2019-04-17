import React, { Component } from 'react';
import './App.css';
import {BrowserRouter,Route,Redirect,Switch} from 'react-router-dom';
import AuthPage from './components/pages/Auth';
import BookingsPage from './components/pages/Bookings';
import EventsPage from './components/pages/Events';
import MainNavigation from './components/Navigation/MainNavigation';

class App extends Component {
  render() {
    return (
      <div>
<html>
<head>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
</head>
<body>
      <BrowserRouter>
      <React.Fragment>
      <MainNavigation/>
      
        <main>
        <Switch>
      <Redirect from="/" to="/auth" exact></Redirect>
      <Route path="/auth" component={AuthPage}></Route>
      <Route path="/events" component={EventsPage}></Route>
      <Route path="/bookings" component={BookingsPage}></Route>
      </Switch>
        </main>
     
      </React.Fragment>
      </BrowserRouter>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </body>
</html>
      </div>
     
    );
  }
}

export default App;
