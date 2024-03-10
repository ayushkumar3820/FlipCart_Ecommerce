import { Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";


const Wrapper = styled(Box)(({ theme }) => ({
    margin: "0 3% 0 auto",
    display: "flex",
    "& > *": {
      marginRight: "40px !important",
      textDecoration: "none",
      color: "#FFFFFF",
      fontSize: 12,
      alignItems: "center",
      [theme.breakpoints.down("sm")]: {
        color: "#2874f0",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginTop: 10,
      },
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  }));
  
  const Container = styled(Box)(({ theme }) => ({
      display: 'flex',
      [theme.breakpoints.down('sm')]: {
          display: 'block'
      }
  }));
  
  const LoginButton = styled(Button)(({ theme }) => ({
      color: '#2874f0',
      background: '#FFFFFF',
      textTransform: 'none',
      fontWeight: 600,
      borderRadius: 2,
      padding: '5px 40px',
      height: 32,
      boxShadow: 'none',
      [theme.breakpoints.down('sm')]: {
          background: '#fff',
          color: '#FFFFFF'
      }
  }));

  
const CustomerButtons = () =>{
    return (
        <Wrapper>

        <LoginButton variant="outlined" >Login</LoginButton>
        <Typography style={{ marginTop: 3, width: 135 }}>
          Become a Seller
        </Typography>
        <Typography style={{ marginTop: 3 }}>More</Typography>
  
        <Container >
  
               <ShoppingCart />
                  <Typography style={{ marginLeft: 10 }}>Cart</Typography>
              </Container>
      </Wrapper>
    )
}


export default CustomerButtons;