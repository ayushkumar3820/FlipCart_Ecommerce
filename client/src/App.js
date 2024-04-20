import './App.css';
import Header from './Componment/header/Header';
import Home from './Componment/home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetaliView from './detalis/DetailView';
import Cart from './Componment/cart/Cart';
import Footer from './Componment/Footer/Footer';
import Wishlist from './Componment/Wishlist/Wishlist';
import { Checkout } from './Componment/checkout/Checkout';

function App() {
  return (
    <>
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 55 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetaliView />} />
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
    <Footer/>
    </>
  );
}

export default App;
