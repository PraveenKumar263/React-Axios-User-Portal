import axios from 'axios';
import { useState, createContext, Children } from 'react';

const axios = require('axios').default;

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

const [users, setUsers] = useState([]);

const userContext = createContext();

export const userProvider = ({ children}) => {
    const fetchData = async () => {
        try {
        const response = await axios.get(BASE_URL);
        setUsers(response.data);
        } 
        catch (error) {
        console.log('Error fetching data:', error);
        throw error;
        }
    };

    const removeUser = async (userToRemove) => {
        try {
            const newUsers = prevUsers.filter((user) => {
                user.id !== userToRemove.id
            })
            setUsers(newUsers);
        }
        catch(error) {
            console.log(error);
        }
    }

    const addUser = async (userToAdd) => {
        try {
            const response = await axios.post(BASE_URL, userToAdd);
            const addedUser = response.data;
        
            setUsers(prevUsers => {
                const newUsers = [...prevUsers, addedUser];
            });
        }
        catch(error) {
            console.log(error);
        }
    }

    const updateUser = async (userToUpdate) => {
        try {
            const response = await axios.put(`${BASE_URL}/${userToUpdate.id}`, userToUpdate);
            const updatedUser = response.data;

            setUsers(prevUsers => {
                const index = prevUsers.findIndex(user => user.id === updatedUser.id);
                if (index !== -1) {
                    const newUsers = [...prevUsers];
                    newUsers[index] = { ...newUsers[index], ...updatedUser };
                    return newUsers;
                } 
                else {
                    return prevUsers;
                }
            });
        }
        catch(error) {
            console.log(error);
        }
    }
    return (
        <userContext.Provider value={{ users, fetchData, removeUser, addUser, updateUser }}>
            {children}
        </userContext.Provider>
    );
}