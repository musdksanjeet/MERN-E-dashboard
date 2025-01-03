import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();


  const logout = () => {
    localStorage.clear();
    navigate('/register');  // Redirect to the Register page after logout
  };

  return (
    <div>
      <img alt='logo' className='logo' src='https://www.recenturesoft.com/assets/img/740a1e59b1ac41a265401dd0a62974c9.png'></img>
      {
        auth ?   
        <ul className="nav-li">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/update">Update Product</Link></li>        
        <li><Link to="/profile">Profile</Link></li>  
        <li> <Link onClick={logout} to="/register">Logout</Link> </li>             
       </ul>
      :
      <ul className='nav-li nav-list'>
        <li><Link to="/register">Register</Link></li> 
        <li><Link to="/login">Login</Link></li>
      </ul>

      }
    
    </div>
  );
};

export default Nav;
