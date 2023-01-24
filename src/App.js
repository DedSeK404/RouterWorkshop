import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './Component/NavigationBar';
import { Home } from './Component/Home';
import { ProductList } from './Component/ProductList';
import Login from './Component/Login';
import { Navigate, Route, Routes } from 'react-router-dom';
import { data } from './data';
import { useState } from 'react';
import { ProductDetails } from './Component/ProductDetails';
import { Notfound } from './Component/NotFound';

function App() {
  const [list, setList]=useState(data)
  return (
    <div>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<ProductList  list={list}/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/details/:idproduct" element={<ProductDetails list={list}/>}/>
     <Route path='/*' element={<Notfound/>}/>
     {/* <Route path="/*" element={ <Navigate to="/" replace={true} />} /> */}
      </Routes>
    </div>
  );
}

export default App;
