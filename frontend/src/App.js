import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <Nav />        
        <Routes>
          <Route path="/" element={<h3>Product List</h3>} />
          <Route path="/add" element={<h3>Add Product</h3>} />
          <Route path="/update" element={<h3> Update Product</h3>} />          
          <Route path="/profile" element={<h3>Profile</h3>} />
          <Route path="/logout" element={<h3>Logout</h3>} />
          <Route path="/register" element={<SignUp/>} />
        </Routes>
        
      </BrowserRouter>
      <Footer/>

    </div>
  );
}

export default App;
