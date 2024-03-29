import { useState, useContext } from 'react';
import { authenticateLogin, authenticateSignup } from '../../service/api.js';
import { DataContext } from '../../context/DataProvider';
import styled from '@emotion/styled';
import { Dialog, TextField, Box, Button, Typography } from '@mui/material';

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
    padding: 30px 20px;
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
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const loginInitialValues = {
    username: '',
    password: ''
};

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const LoginDialog = ({ open, setOpen }) => {
    const [account, toggleAccount ] = useState(accountInitialValues.login);
    const [signup, setSignup] = useState(signupInitialValues);
    const { setAccount } = useContext(DataContext);
    const [login, setLogin] = useState(loginInitialValues);
    const [error, setError] = useState(false);

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const logiUser = async () => {
       let response = await authenticateLogin(login);
       setAccount(login.username);

       if (response.status === 200){
            handleClose();
       } else {
            setError(true);
       }
    };

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    };

    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        handleClose();
        setAccount(signup.firstname);
    };
    
    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subheading}</Typography>
                    </Image>
                    { account.view === 'login' ?
                        <Wrapper>
                            <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Enter username' />
                            { error && <Error>Please enter valid Email ID</Error> }
                            <TextField variant="standard" onChange={(e)=>onValueChange(e)} name='password' label='Enter Password' />
                            <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                            <LoginButton onClick={() => logiUser()}>Login</LoginButton>
                            <Text style={{ textAlign: 'center' }}>OR</Text>
                            <RequestOTP>Request OTP</RequestOTP>
                            <CreateAccount onClick={() => toggleSignup()} >New to Flipkart? Create an account</CreateAccount>
                        </Wrapper> :
                        <Wrapper>
                            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='firstname' label='Enter Firstname' />
                            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='lastname' label='Enter Lastname' />
                            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='username' label='Enter Username' />
                            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='email' label='Enter Email' />
                            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='password' label='Enter Password' />
                            <TextField variant="standard" onChange={(e)=>onInputChange(e)} name='phone' label='Enter Phone' />
                            <LoginButton onClick={() => signupUser()} >Continue</LoginButton>
                        </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;
