import { InputBase,styled,Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchContiner=styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px; 
display:flex;`

const Seacrhinputcase=styled(InputBase)
`
padding-left:20px;
width:100%;
`

const SearchIconWrapped=styled(Box)
`
color:blue;
padding-left:10px;
width:20px;
font-size:unset;
`;
const Search=()=>
{
    return (
        <SearchContiner >
             <Seacrhinputcase 
              placeholder='Search for products,brands, and more'/>
             <SearchIconWrapped>
                <SearchIcon/>
             </SearchIconWrapped>
        </SearchContiner>
    )
}

export default Search;