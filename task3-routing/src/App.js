import React, { Component } from 'react';

import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Course from './containers/Course/Course';
import NoMatch from './components/NoMatch';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <ul style={{ listStyle: 'none', margin: 'auto', padding: '0' }}>
            <li style={{ display: 'inline-block', margin: '15px', fontSize: '30px' }}><NavLink to={'/courses'}>Courses</NavLink></li>
            <li style={{ display: 'inline-block', margin: '15px', fontSize: '30px' }}><NavLink to={'/users'}>Users</NavLink></li>
          </ul>
        </nav>

        <Switch>
          {/* KOLEJNOŚĆ ROUTE'ÓW MA ZNACZENIE!!! Można pozbyć się switch'a i dać exact przy path='courses' exact */}
          <Route path='/courses/:courseId/:courseTitle' component={Course} />
          <Route path='/courses' component={Courses} />
          <Route path='/users' component={Users} />
          <Redirect from='/all' to='/users' />
          <Route component={NoMatch} />
        </Switch>

      </div>
    );
  }
}

export default App;
