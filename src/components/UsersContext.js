import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

// Context API
export const UserContext = createContext();

// Context Provider
export function UserProvider({ children }) {
    const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

    const [users, setUsers] = useState([]);

    // fetch data once when the provider mounts
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(BASE_URL);
                // console.log(response.data)
                setUsers(response.data);
            }
            catch (error) {
                console.log('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const removeUser = async (userId) => {
        try {
            await axios.delete(`${BASE_URL}/${userId}`);
            setUsers(users.filter(user => user.id !== userId));
        }
        catch (error) {
            console.log('Error deleting user:', error);
        }
    };

    const addUser = async (userToAdd) => {
        try {
            const response = await axios.post(BASE_URL, userToAdd);
            // console.log(response.data)
            setUsers(prevUsers => [...prevUsers, response.data]);
        }
        catch (error) {
            console.log('Error adding user:', error);
        }
    };

    const updateUser = async (userToUpdate) => {
        try {
            const response = await axios.put(`${BASE_URL}/${userToUpdate.id}`, userToUpdate);
            // console.log(response.data)
            setUsers(prevUsers => {
                const index = prevUsers.findIndex(user => user.id === userToUpdate.id);
                if (index !== -1) {
                    const newUsers = [...prevUsers];
                    newUsers[index] = response.data;
                    return newUsers;
                }
                return prevUsers;
            });
        }
        catch (error) {
            console.log('Error updating user:', error);
        }
    };

    return (
        <UserContext.Provider value={{ users, removeUser, addUser, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
