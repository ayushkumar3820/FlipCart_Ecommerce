import './App.css';
import Header from './Componment/header/Header';
import Home from './Componment/home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetaliView from './detalis/DetailView';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 55 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetaliView />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
