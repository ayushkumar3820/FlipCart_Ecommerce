import styled from '@emotion/styled';
import { Dialog, TextField, Box, Button, Typography } from '@mui/material';
import { useState ,useContext} from 'react';
import { authenticatesignup } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    height: 70vh;
    width: 100vh;
`;
const Image = styled(Box)`
     background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 25%;
    height: 100%;
    padding: 45px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600
   }
`;

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 13px;
    padding:30px 20px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`;

const accountInitialValues = {
    login: {
        view: 'login',
        heading:'Login',
        subheading:'Get access to your Orders , Wishlist and Recommendations'

    },
    signup: {
        view: 'signup',
        heading :"Look like you're new here!",
        sunheading:"Sign up with your moblie number  to get  strated "
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};
const LoginDialog = ({ open, setOpen }) => {

     const [ account, toggleAccount ] = useState(accountInitialValues.login);
     const [signup,setSignup]=useState(signupInitialValues)
     const [setAccount]=useState(DataContext);

    //  const onValueChange = (e) => {
    //     setLogin({ ...login, [e.target.name]: e.target.value });
    // }

    

     const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    }

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
    }

    const onInputChange=(e)=>{
        setSignup({ ...signup, [e.target.name]: e.target.value });
      
    }

    const  signupUser=async()=>{
        let respone=await authenticatesignup(signup);
        if(!respone)return;
        handleClose();
        setAccount(signup.firstname);

    }
    
    

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                            <Wrapper>
                                <TextField variant="standard" label='Enter Email/Mobile number' />
                                <TextField variant="standard" label='Enter Password' />
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton >Login</LoginButton>
                                <Text style={{ textAlign: 'center' }}>OR</Text>
                                <RequestOTP>Request OTP</RequestOTP>
                                <CreateAccount onClick={() => toggleSignup()} >New to Flipkart? Create an account</CreateAccount>
                            </Wrapper> :
                            <Wrapper>
                                <TextField variant="standard"  onChange={(e)=>onInputChange(e)}   name='firstname' label='Enter Firstname' />
                                <TextField variant="standard"  onChange={(e)=>onInputChange(e)}   name='lastname' label='Enter Lastname' />
                                <TextField variant="standard"  onChange={(e)=>onInputChange(e)}   name='username' label='Enter Username' />
                                <TextField variant="standard"  onChange={(e)=>onInputChange(e)}   name='email' label='Enter Email' />
                                <TextField variant="standard"  onChange={(e)=>onInputChange(e)}   name='password' label='Enter Password' />
                                <TextField variant="standard"  onChange={(e)=>onInputChange(e)}   name='phone' label='Enter Phone' />
                                <LoginButton  onClick={()=>signupUser()} >Continue</LoginButton>
                            </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog;
