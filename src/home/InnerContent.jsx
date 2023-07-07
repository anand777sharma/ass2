import * as React from 'react';
import Box from '@mui/material/Box';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import Button from '@mui/material/Button';


import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlarmAddOutlinedIcon from '@mui/icons-material/AlarmAddOutlined';
import SmsIcon from '@mui/icons-material/Sms';
import MarkunreadOutlinedIcon from '@mui/icons-material/MarkunreadOutlined';
import ReceiptLongOutlinedIcon from '@mui/icons-material/ReceiptLongOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowDownwardOutlinedIcon from '@mui/icons-material/ArrowDownwardOutlined';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';
import AddIcon from '@mui/icons-material/Add';

import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';
// import OnDeviceTrainingIcon from '@mui/icons-material/OnDeviceTraining';
import PhotoAlbumIcon from '@mui/icons-material/PhotoAlbum';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Wrapper = styled(Box)`
display:flex;
margin:5px 5px;
`;
const Container = styled(Box)
    (({ theme }) => ({
        margin: "5px 10px",
        boxShadow: "0 0px 14px 0 rgb(0 0 0 /30%)",
        padding: "10px",
        [theme.breakpoints.down('md')]: {
            height: "100%"
        }
    }));
const LeftContainer = styled(Box)
    (({ theme }) => ({
        width: "25%",
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }));


const RightContainer = styled(Box)
    (({ theme }) => ({
        width: "75%",
        [theme.breakpoints.down('md')]: {
            width: "100%"
        }
    }));


const StyledHeader = styled(Box)
(({ theme }) => ({
    background: "#fff",
    width: "100%",
    display: "flex",
    height: "60px",
    marginTop: "25px",
    [theme.breakpoints.down('md')]: {
        display: "block",
    },

}));

const Search = styled(Box)
    (({ theme }) => ({
        display: "flex",
        position: "absolute",
        right: "40px",
        [theme.breakpoints.down('md')]: {
             right:"40px"

        },
        [theme.breakpoints.down('sm')]: {
            right:"0px"
        },
    }));
const SearchIconWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    margin: "10px 0 0 0",
    margin: "10px 0px 0 0",
    position: "relative",
    left: "30px",
    zIndex: "1",

}));

const StyledInputBase = styled(InputBase)`
width:300px;
height:40px;
background:#fff;
border:1px solid #b4b4b4
`;

const StyledSearch = styled(SearchIcon)`
  color:#b4b4b4;
  `;
const StyledContact = styled(PhotoAlbumIcon)`
  color:#fe646f;
  height:20px;
  width:20px;
  `;
const StyledText = styled(Typography)`
margin:10px;
font-size:14px;
`;


function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Sale', "", "1    30/06/2023", "₹2360.00", "₹2360.00"),
    createData('Sale', "", "2    30/06/2023", "₹814.00", "₹0.00"),
];

const rows2 = [
    createData('KSP Sanhula', "2,360.00"),
];
const StyledFilter = styled(FilterAltOutlinedIcon)`
margin:0px 10px -5px 20px ;
color:#b4b4b4;
`;
const StyledArrow = styled(KeyboardArrowRightIcon)`
color:blue;
`;

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "#cee6f3",
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const Price = styled(Box)`
float:right;
`



const InnerContent = () => {
    return (
        <>
            <Box sx={{
                width: "100%",
                margin: "0px 5px",
                boxShadow: "0 0px 8px 0 rgb(0 0 0 /30%)",
                height: "50px",
                marginTop: "66px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f5f5f5",

            }}><Typography sx={{
                marginTop: "0px", color: "#33a4d0",
                fontWeight: 500,
            }}>NAME</Typography></Box>

            <Wrapper>

                <LeftContainer>
                    <Container sx={{ height: "76vh" }}>
                        <Box
                            sx={{
                                display: "flex",
                                padding: "15px 3px",
                                boxShadow: "0 0px 8px 0 rgb(0 0 0 /30%)"
                            }}>
                            <Box sx={{ width: "20%", margin: "0 12px", }}>
                                <IconButton aria-label="contact"
                                    sx={{ background: "#ffe2e2", height: "35px", width: "35px" }}
                                >
                                    <StyledContact />
                                </IconButton>
                            </Box>
                            <Box sx={{
                                width: "70%",

                            }}>
                                <Typography sx={{ fontWeight: 700, fontSize: "14px" }}>   Import parties</Typography>
                                <Typography sx={{ fontSize: "13px", color: "#b4b4b4", lineHeight: "1.5" }} >
                                    use Contact from your
                                    phone or email
                                    to create parties

                                </Typography>
                            </Box>
                            <Box sx={{ width: "10%", margin: "0 5px" }}>
                                <StyledArrow />
                            </Box>
                        </Box>

                        <Box sx={{ margin: "20px 0" }}>
                            <IconButton aria-label="contact"
                                sx={{ background: "#e0e0e0", height: "45px", width: "45px", boxShadow: "0px 0px 8px 0px rgba(0,0,0,0.2)", }}
                            >
                                <SearchIcon />
                            </IconButton>

                            <Button variant="text" startIcon={<AddIcon />} endIcon={<KeyboardArrowDownOutlinedIcon />}
                                sx={{
                                    margin: "0 0 -5px 0",
                                    float: "right",
                                    color: "#fff",
                                    background: "#f3a33a",
                                    borderRadius: "10px",
                                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
                                }} >Add Party</Button>

                            <TableContainer component={Paper}>
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><ArrowUpwardOutlinedIcon sx={{
                                                margin: "0 0 -5px 0",
                                                color: "#b4b4b4"

                                            }} />PARTY<StyledFilter sx={{ color: "#fe646f" }} /> </TableCell>

                                            <TableCell>AMOUNT</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows2.map((row) => (
                                            <StyledTableRow
                                                key={row.name}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {row.name}
                                                </TableCell>
                                                <TableCell align="right">{row.calories}</TableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Box>
                    </Container>
                </LeftContainer>
                <RightContainer>
                    <Container>
                        <Typography sx={{
                            margin: "0 0 15px 0",

                        }}
                        >KSP SANHAULA
                            <Price component="span"><SmsIcon sx={{ color: "#f2b973" }} /> <WhatsAppIcon sx={{ color: "#91dc51" }} />
                                <AlarmAddOutlinedIcon sx={{ color: "#c5c5c5" }} />
                            </Price>
                        </Typography>
                        <Typography>Phone:8282828882
                            <Price component="span">Address: Sanhaula</Price>
                        </Typography>
                        <Typography >Email: <MarkunreadOutlinedIcon
                            sx={{
                                margin: "0 0 -5px 0",
                                color: "#67b6ff"

                            }}
                        /> <Typography variant='span' sx={{ color: "#67b6ff" }}> Add Email ID </Typography>
                            <Price component="span">GstIn: <ReceiptLongOutlinedIcon
                                sx={{
                                    margin: "0 0 -5px 0",
                                    color: "#67b6ff"

                                }}
                            /> <Typography variant='span' sx={{ color: "#67b6ff" }}> Add GSTIN</Typography>  </Price>
                        </Typography>
                        <Typography>No Creidt Limit Set: <Typography variant='span' sx={{ color: "#67b6ff" }}>  ₹ Set Credit Limit</Typography>
                        </Typography>

                    </Container>
                    <Container sx={{ height: "55vh" }}>

                        <StyledHeader>

                            <StyledText>TRANSACTIONS</StyledText>

                            <Search>
                                <SearchIconWrapper>
                                    <StyledSearch style={{ color: "#b4b4b4" }} />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    placeholder=""
                                    inputProps={{ 'aria-label': 'search' }}
                                />
                            </Search>

                        </StyledHeader>



                        <TableContainer component={Paper}>
                            <Table aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Type</TableCell>
                                        <TableCell> <StyledFilter /> Number</TableCell>
                                        <TableCell>  <StyledFilter /> <ArrowDownwardOutlinedIcon sx={{
                                            margin: "0 0 -5px 0",
                                            color: "#b4b4b4"
                                        }} />Date</TableCell>
                                        <TableCell>  <StyledFilter />Total</TableCell>
                                        <TableCell align="right">  <StyledFilter />Balance </TableCell>
                                        <TableCell align="right">    <StyledFilter /></TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow
                                            key={row.name}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            <TableCell align="right">{row.carbs}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                            <TableCell align="right">{row.protein}</TableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Container>

                </RightContainer>





            </Wrapper>
        </>
    );
}
export default InnerContent;