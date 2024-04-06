import { useEffect } from "react";
import { Box,styled } from "@mui/material";
import { Banner } from "./Banner.jsx";
import NavBar from "./NavBar";
import {Fragment} from 'react';
import { getProducts } from "../../redux/actions/productActions.js";
import { useDispatch,useSelector  } from "react-redux";
import {Slide} from './Slide.jsx'
import {MidSlide} from './MidSlide.jsx'
import MidSection from './MidSection.jsx';


const Component = styled(Box)(({ theme }) => ({

    padding:'0px 7px 15px 7px',
    background:'#F2F2F2',
    
    [theme.breakpoints.down('md')]: {
      padding:'0'
  }
  }));

const Home = () => {
    const {products} = useSelector((state) =>state.getProducts); 
    console.log(products);

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    return (
        <Fragment>
             <NavBar/>
                 <Component>
                     <Banner/>
                         <MidSlide products={products} title="Suggested Items" timer={false}/> <MidSection/>
                         <Slide products={products} title="Suggested Items" timer={false}/>
                         <Slide products={products} title="Top Selection" timer={false}/>
                         <Slide products={products} title="Recommended Items" timer={false}/>
                         <Slide products={products} title="Session's Top picks" timer={true}/>
                         <Slide products={products} title="Top Deals on Accessories" timer={false}/>  
                 </Component>
        </Fragment>
    )
}


export default Home;
