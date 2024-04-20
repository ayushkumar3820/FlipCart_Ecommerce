import React, { useState } from 'react';
import { Button, Box, styled } from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { payUsingPaytm } from '../service/api';
import loadRazorpay from '../utils/loadpayment';
import { addToCart } from '../redux/actions/cartActions';
import { useDispatch } from 'react-redux';

const LeftContainer = styled(Box)(({ theme }) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    marginRight: '30px' ,
    [theme.breakpoints.down('md')]: {
        padding: '20px 40px'
    }
}));

const Image = styled('img')({
    padding: '15px 20px',
    border: '1px solid #f0f0f0',
    width: '95%',
    marginRight: '30px' 
});

const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;

const ActionItem = ({ product }) => {
    const navigate = useNavigate();
    const { id } = product;
        
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const buyNow = async () => {
        try {
            const response = await payUsingPaytm({ amount: 500, email: 'ayushkumarnbd125@gmail.com'});
            const information = {
                action: 'https://securegw-stage.paytm.in/order/process',
                params: response    
            };
            loadRazorpay(information);
        } catch (error) {
            console.error('Error while processing payment:', error);
        }
    };

    const addItemToCart = () => {
        dispatch(addToCart(id, quantity));
        navigate('/cart');
    };

    return (
        <LeftContainer>
            <Image src={product.detailUrl} /><br />
            <StyledButton onClick={() => addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton onClick={() => buyNow()} style={{background: '#fb641b', marginRight:'5px'}} variant="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    );
};

export default ActionItem;
