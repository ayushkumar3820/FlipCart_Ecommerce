import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsDetalis } from '../redux/actions/productActions';
import { Box } from "@mui/material";

const DetaliView = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { loading, product } = useSelector((state) => state.getProductDetails);
    useEffect(() => {
        if (product && id !== product.id) {
            dispatch(getProductsDetalis(id));
        }
    }, [dispatch, id, product]);

    return (
        <Box>
            {
                loading ? (
                    <Box>
                
                    </Box>
                ) : (
                    <Box>
                        
                    </Box>
                )
            }
        </Box>
    );
}

export default DetaliView;
