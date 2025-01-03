import React,{useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  
  const logout = ()=>{
    localStorage.clear();
    navigate('/register');
  }

  return (
    <div>
      <ul className="nav-li">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Product</Link></li>
        <li><Link to="/update">Update Product</Link></li>        
        <li><Link to="/profile">Profile</Link></li>     
        <li>{
            auth ?<Link onClick={logout} to="/register">Logout</Link> : <Link to="/register">Register</Link>
            }
        </li>
      </ul>
    </div>
  );
}

export default Nav;
