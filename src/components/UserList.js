import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { useContext, useState } from 'react';
import { UserContext } from './UsersContext';

export function UserList() {
    const { removeUser, updateUser, users } = useContext(UserContext);
    const [editRowId, setEditRowId] = useState(null);
    const [editRowData, setEditRowData] = useState({});

    // To store the user data as a temp var to ammend it
    const handleEdit = (row) => {
        setEditRowId(row.id);
        setEditRowData({ id: row.id, name: row.name, phone: row.phone, email: row.email });
    };

    // save the updated user details
    const handleSave = () => {
        updateUser(editRowData);
        setEditRowId(null);
    };

    // to handle changes of user data
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditRowData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Phone</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {editRowId === row.id ? (
                                    <TextField
                                        name="name"
                                        value={editRowData.name}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    row.name
                                )}
                            </TableCell>
                            <TableCell align="right">
                                {editRowId === row.id ? (
                                    <TextField
                                        name="phone"
                                        value={editRowData.phone}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    row.phone
                                )}
                            </TableCell>
                            <TableCell align="right">
                                {editRowId === row.id ? (
                                    <TextField
                                        name="email"
                                        value={editRowData.email}
                                        onChange={handleInputChange}
                                    />
                                ) : (
                                    row.email
                                )}
                            </TableCell>
                            <TableCell align="right">
                                <Button
                                    variant='outlined'
                                    startIcon={editRowId === row.id ? <SaveIcon /> : <EditIcon />}
                                    onClick={() => editRowId === row.id ? handleSave(row.id) : handleEdit(row)}
                                >
                                    {editRowId === row.id ? 'Save' : 'Edit'}
                                </Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button
                                    variant="outlined"
                                    startIcon={<DeleteIcon />}
                                    onClick={() => removeUser(row.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
