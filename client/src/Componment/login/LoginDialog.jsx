import React, { useState, useEffect, useContext } from 'react';
import { authenticateLogin, authenticateSignup } from '../../service/api';
import { DataContext } from '../../context/DataProvider';
import styled from '@emotion/styled';
import { ToastContainer, toast } from 'react-toastify';
import { Dialog, DialogContent, TextField, Box, Button, Typography } from '@mui/material';

const Component = styled(DialogContent)`
    height: 80vh;
    width: 105vh;
    padding: 0;
    padding-top: 0;
    overflow: hidden;
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
    font-size: 12px;
`;

const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer;
`;

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const Wrapper = styled(Box)`
    padding: 20px 35px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 20px;
    }
`;

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    width: 40%;
    height: 100%;
    padding: 1px 35px;
    & > p, & > h5 {
        color: #FFFFFF;
        font-weight: 600;
        margin-top: 50px;
    }
`;

const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
};

const accountInitialValues = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'
    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: 'Signup to get started'
    }
};

const LoginDialog = ({ open, setopen }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [error, showError] = useState(false);
    const [account, toggleAccount] = useState(accountInitialValues.login);
    const { setAccount } = useContext(DataContext);

    useEffect(() => {
        showError(false);
    }, [login]);

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    };

    const loginUser = async () => {
        let response = await authenticateLogin(login);
        if (!response) {
            showError(true);
            toast.error('Login Failed!');
            return;
        } else {
            showError(false);
            handleClose();
            setAccount(login.username);
            toast.error('Login Failed!');
            return;
        }
    };

    const signupUser = async () => {
        let response = await authenticateSignup(signup);
        if (!response) {
            showError(true);
            toast.error('Signup Failed!');
            return;
        } else {
            showError(false);
            handleClose();
            setAccount(login.username);
            toast.success('Signup Successful!');
            return;
        }
    };

    const toggleSignup = () => {
        toggleAccount(accountInitialValues.signup);
    };

    const handleClose = () => {
        setopen(false);
        toggleAccount(accountInitialValues.login);
    };

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: 'flex', height: '100%' }}>
                    <Image>
                        <Typography variant="h5">{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onValueChange(e)} name='username' label='Enter Email/Mobile number' />
                                {error && <Error>Please enter valid Email ID</Error>}
                                <TextField required variant="standard" onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                                <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton variant="contained" onClick={event => { loginUser() }}>Login</LoginButton>
                                <ToastContainer />
                                <Text style={{ textAlign: 'center' }}>OR</Text>
                                <RequestOTP>Forgot Password</RequestOTP>
                                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                            </Wrapper>
                            :
                            <Wrapper>
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                                <TextField variant="standard" onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone' />
                                <LoginButton variant="contained" onClick={() => signupUser()} >Continue</LoginButton>
                            </Wrapper>
                    }
                </Box>
            </Component>
            <ToastContainer />
        </Dialog>
    );
}

export default LoginDialog;
