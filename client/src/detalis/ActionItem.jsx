import {Box, Button,styled} from '@mui/material';
import { ShoppingCart as Cart, FlashOn as Flash } from '@mui/icons-material';

const LeftContainer=styled(Box)`
min-width:40%;
padding:40px 0 0 80px;
`
const Image=styled('img')({
    padding:'15px 20px',
    border:'1px solid #f0f0f0'
})


const StyledButton = styled(Button)`
    width: 46%;
    border-radius: 2px;
    height: 50px;
    color: #FFF;
`;


const ActionItem=({product})=>{
    return (
        <LeftContainer>
            <Image src={product.detailUrl} /><br />
            <StyledButton style={{marginRight: 10, background: '#ff9f00'}} variant="contained"><Cart />Add to Cart</StyledButton>
            <StyledButton style={{background: '#fb641b'}} variant="contained"><Flash /> Buy Now</StyledButton>
        </LeftContainer>
    )
}

export default ActionItem;