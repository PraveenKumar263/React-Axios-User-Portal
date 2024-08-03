import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export function ButtonAppBar() {
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1, marginBottom: { xs: 2, sm: 4, md: 6, xl: 8 } }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="home"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/")}
                    >
                        <HomeIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        User Data
                    </Typography>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="cart"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/userData")}
                    >
                        <PeopleAltIcon />

                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
