

import {AppBar,Toolbar,Box,Typography ,styled} from '@mui/material';

import Search from './Search';
import CustomerButtons from './CustomerButtons';



const StyledHeader=styled(AppBar)`
background:#2874f0; height=65px`;

const Comp=styled(Box)`
margin-left:8%;
line-height:0px;
`
const SubHeading =styled(Typography)
`font-size:10px;
 font-style:italic;
`
const Plusimage=styled('img')
(
  {
    width:3,
    height:10,
    marginLeft:4
  }
)

// const CustomerButtonsWapper= Box(styled)`
// margin: 0 5% 0 auto,
// dislay:flex
// `;
const Header =()=>
{
    const logoURL ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL  ="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
   


    return (
       <StyledHeader >
        <Toolbar style={{minHeight:55}}>
            <Comp>
                <img src={logoURL} alt='logo' style={{width:75}}/>
                  <Box style={{displye:'flex'}}>
                    <SubHeading>Expolre &nbsp;
                        <Box component="span" style={{color:'#FFE500'}}> Plus</Box>
                    < Plusimage src={subURL} alt='sub-logo' style={{width:10}}/> 
                    </SubHeading>
                  </Box>   
            </Comp>
            <Search/>
          <CustomerButtons/>
        </Toolbar>
         </StyledHeader>
    )
}

export default Header;
