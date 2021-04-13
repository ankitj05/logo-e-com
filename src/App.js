import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cart from './components/pages/cart/Cart';
import Checkout from './components/pages/Checkout/Checkout';
import Home from './components/pages/Home';
import Logout from './components/pages/Logout';
import NotFound from './components/pages/NotFound';
import Navbar from './components/layout/Navbar';
import Signup from './components/pages/Signup';
import Notification from './components/Notification';
import LogoState from './context/logo/LogoState';
import UserState from './context/user/UserState';
import NotificationState from './context/notification/notificationState';

const App = () => {

  return (
    <UserState>
      <LogoState>
        <NotificationState>
          <Router>
            <div className="">
              <Navbar />
              <div className=''>
                <Notification />
                <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/logout' component={Logout} />
                  <Route exact path='/signup' component={Signup} />
                  <Route exact path='/cart/:login' component={Cart} />
                  <Route exact path='/checkout/:login' component={Checkout} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </NotificationState>
      </LogoState>
    </UserState>
  );
}

export default App;
