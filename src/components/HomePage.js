import { Box, Button, Container, createTheme, Grid, TextField, ThemeProvider, Typography } from '@mui/material';
import { deepPurple, green, grey, lightGreen } from '@mui/material/colors';
import React, { useContext, useState } from 'react';
import { UserContext } from './UsersContext';

// Create custom theme
const theme = createTheme({
    palette: {
        primary: {
            main: deepPurple[500],
        },
        secondary: {
            main: lightGreen[500],
            dark: green[700],
        },
        text: {
            primary: deepPurple[50],
            secondary: grey[900],
        },
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: deepPurple[50],
                },
                outlined: {
                    '&.MuiInputLabel-shrink': {
                        color: deepPurple[50], // color of label when typing
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    '& .MuiInputBase-input': {
                        color: deepPurple[50], // input text
                        borderColor: deepPurple[50],
                    },
                },
                notchedOutline: {
                    borderColor: deepPurple[50],
                },
            },
        },
    },
});


export function HomePage() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const { addUser } = useContext(UserContext);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        addUser({
            name: name,
            email: email,
            phone: phone
        });
        setName('');
        setPhone('');
        setEmail('');
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <div className='img-box'>
                            <img
                                src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1721830600~exp=1721831200~hmac=179a5d271ab0a9b3e1cb2e6af87875595cf909957047e12ea66a25b2e0ef018c"
                                alt="user-image"
                                style={{ maxWidth: '100%', height: 'auto' }}
                            />
                        </div>
                        <Typography
                            variant="caption"
                            align="center"
                        >
                            Image by <a href="https://www.freepik.com/" target='_blank' rel="noopener noreferrer">Freepik</a>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box
                            sx={{
                                bgcolor: 'primary.main',
                                padding: 3,
                                borderRadius: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}
                        >
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 4, color: 'text.primary' }}>
                                Enter Your Data
                            </Typography>
                            <form onSubmit={handleSubmit}>
                                <Box sx={{ mb: 3 }}>
                                    <TextField
                                        fullWidth
                                        id="nameInput"
                                        label="Name"
                                        variant="outlined"
                                        size="small"
                                        required
                                        value={name}
                                        color='secondary'
                                        onChange={handleNameChange}
                                    />
                                </Box>
                                <Box sx={{ mb: 3 }}>
                                    <TextField
                                        fullWidth
                                        id="emailInput"
                                        type="email"
                                        label="Email"
                                        variant="outlined"
                                        size="small"
                                        required
                                        value={email}
                                        onChange={handleEmailChange}
                                    />
                                </Box>
                                <Box sx={{ mb: 3 }}>
                                    <TextField
                                        fullWidth
                                        id="phoneNumInput"
                                        type="text"
                                        label="Phone Number"
                                        variant="outlined"
                                        size="small"
                                        required
                                        value={phone}
                                        onChange={handlePhoneChange}
                                    />
                                </Box>
                                <Box sx={{ mt: 3 }}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        fullWidth
                                        type="submit"

                                        sx={{
                                            color: 'text.secondary',
                                            '&:hover': {
                                                backgroundColor: 'secondary.dark',
                                            },
                                        }}
                                    >
                                        Add To List
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </ThemeProvider>
    );
}
