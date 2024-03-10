
import './App.css';
import Header from './Componment/header/Header';
import Home from './Componment/home/Home';
import {Box} from '@mui/material';
function App() {
  return (
    <div className='App'>
      <Header/>
        <Box style={{marginTop:55}}> 
           <Home/>
        </Box>
    </div>
   
  );
}

export default App;
