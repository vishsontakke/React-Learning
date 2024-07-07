import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const { logoutUser } = useContext(AuthContext);
    const  handleLogout = async () => {
        try {
            await logoutUser();
            navigate('/login');
        } catch (error) {
            console.error('Logout error:', error);
        }
      };
    

    return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
