import React from 'react';
import {NavLink} from 'react-router-dom';

const mainNavigation=(props)=>(


        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink to="/events" className="nav-link">Events</NavLink>


  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <NavLink to="/auth" className="nav-link">Auth</NavLink>
      </li>
      <li class="nav-item active">
      <NavLink to="/bookings" className="nav-link">Bookings</NavLink>
      </li>

    </ul>
  </div>
</nav>
 
)

export default mainNavigation;