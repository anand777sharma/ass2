import * as React from 'react';
import InnerContent from "./InnerContent";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SettingsIcon from '@mui/icons-material/Settings';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CloseIcon from '@mui/icons-material/Close';

import HomeIcon from '@mui/icons-material/Home';


const drawerWidth = 240;

const Search = styled(Box)
    `
display :flex,
&>div{
    margin-bottom : 20px;
  }

`;
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 0),
    height: '100%',
    position: 'absolute',
    top: "0px",
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
const StyledSearch = styled(SearchIcon)`
  color:#b4b4b4,
  `;

const StyledInputBase = styled(InputBase)
    (({ theme }) => ({
        color: '#b4b4b4',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
      
            paddingLeft: `calc(${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            fontSize: '18px',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: "0px",
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));
const StyledHeader = styled(AppBar)`
background:#fff;
height:60px;
`;

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const StyledButton = styled(Button)
    (({ theme }) => ({
        borderRadius: "20px",
        height: "35px",
        width: "190px",
        margin: "0 10px",
        padding: "15px 8px",
        fontSize: "12px",
        fontWeight: "800",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }));


const Home = () => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{
            display: 'flex',
        }}>
            <CssBaseline />
            <StyledHeader position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="#b4b4b4"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Search>
                        <SearchIconWrapper>
                            <StyledSearch style={{ color: "#b4b4b4" }} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search Transactions"

                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>

                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            width: 'fit-content',
                            position: "absolute",
                            right: 0,
                            borderRadius: 1,
                            bgcolor: 'background.paper',
                            color: 'text.secondary',
                            '& svg': {
                                m: 1.5,
                            },
                            '& hr': {
                                mx: 0.5,
                            },
                        }}
                    >

                        <StyledButton variant="text" size="medium" sx={{
                            background: "#ffe5e9"
                        }} startIcon={<AddCircleIcon sx={{
                            color: "#ec0019"
                        }} />}>
                            Add Salse
                        </StyledButton>
                        <StyledButton variant="text" size="medium" sx={{
                            background: "#d2e9ff"
                        }} startIcon={<AddCircleIcon />}>
                            Add Purchase
                        </StyledButton>
                        <StyledButton variant="text" size="medium"
                            startIcon={<AddCircleIcon />}>
                            Add More
                        </StyledButton>
                        <Divider orientation="vertical" flexItem variant="middle" />
                        <WhatsAppIcon />
                        <SettingsIcon />
                    </Box>

                </Toolbar>





            </StyledHeader>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        background: "#212934",
                        color: "#fff",
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <Typography>  <IconButton aria-label="contact"
                        sx={{ background: "#0075e9", height: "45px", width: "45px" }}
                    >
                        <HomeIcon sx={{ color: "#f8a613" ,height: "40px", width: "40px" }} />
                    </IconButton> Machinary and Pa</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon style={{ color: "#b4b4b4" }} /> : <ChevronRightIcon style={{ color: "#b4b4b4" }} />}
                    </IconButton>
                </DrawerHeader>

                <Box
                    sx={{
                        display: "flex",
                        padding: "15px 3px",
                        boxShadow: "0 0px 8px 0 rgb(0 0 0 /30%)",
                        background: "#2a6561",
                    }}>
                    <Box sx={{ width: "20%", margin: "0 12px", }}>
                        <IconButton aria-label="contact"
                            sx={{ background: "#5eba4c", height: "35px", width: "35px" }}
                        >
                            <WhatsAppIcon sx={{ color: "#fff" }} />
                        </IconButton>
                    </Box>
                    <Box sx={{
                        width: "70%",

                    }}>
                        <Typography sx={{ fontWeight: 700, fontSize: "16px", color: "#57b95a" }}>   Import parties</Typography>
                        <Typography sx={{ fontSize: "15px", color: "fff", lineHeight: "1.5" }} >
                            use Contact from your
                            phone or email
                            to create parties

                        </Typography>
                    </Box>
                    <Box sx={{ width: "10%", margin: "0 5px" }}>
                        <CloseIcon />
                    </Box>
                </Box>

                <Divider />
                <List>
                    {["Home", "Parties", "Items", "Sale", "Purchase", "Expenses", "Cash & Bank", "My Online Store", "Reports"].map((text, index) => (
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {index % 2 === 0 ? <InboxIcon style={{ color: "#b4b4b4" }} /> : <MailIcon style={{ color: "#b4b4b4" }} />}
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main open={open}>

                <InnerContent />





            </Main>
        </Box>
    );
}
export default Home;