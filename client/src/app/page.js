"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserTable from './components/UserTable';
import UserForm from './components/UserForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Index () {
  const [users, setUsers] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {

      try {
        const response = await fetch('http://localhost:5000/users', {
          method: 'GET',
        });
        if (response.ok) {
          const result = await response.json();
          //console.log(result);
            setUsers(result); 
          
        }
      } catch (error) {
        console.error(error);
        toast.error("error fetching users");
      }
    };

    fetchUsers();
  }, []);

  const handleUserCreate = async (userData) => {
    try {
      const response = await axios.post('http://localhost:5000/users', userData);
      setUsers([...users, response.data]); // Update state with new user
      setIsAdding(false); // Close the form
      toast.success('User created successfully');
    } catch (error) {
      console.error(error);
      toast.error('Error creating user');
    }
  };
  

  const handleUserUpdate = async (userData) => {
    // Implement logic to update user data in backend
    // Update state with updated user data
    try {
      // Get user data from backend using userId
      const response = await fetch(`http://localhost:5000/users/${userData}`);
      const user = await response.json();
      
      // Open a form for editing with pre-populated user data (create a separate EditUserForm component for this)
      // Handle form submission to make a PUT request to the backend with updated data
      // Update the users state with the updated user data
      toast.success('User updated successfully');
    } catch (error) {
      console.error(error);
      toast.error('Error updating user');
    }
  };

  const handleSelectUser = (userId) => {
    const isSelected = selectedUsers.includes(userId);
    setSelectedUsers(isSelected ? selectedUsers.filter((id) => id !== userId) : [...selectedUsers, userId]);
  };

  const handleSendEmail = async () => {
    // Implement logic to send email with selected user data using an email API service
    toast.success('Email sent successfully');
  };

  const handleOpenAddForm = () => {
    setIsAdding(true);
  };
  //console.log(users);

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col mb-4">
        <UserForm isAdding={isAdding} onSubmit={handleUserCreate} onUpdate={handleUserUpdate} />
        <button className="btn btn-primary ml-auto mt-2" onClick={handleOpenAddForm}>
          Add New
        </button>
      </div>
      <UserTable users={users} onEdit={handleUserUpdate}/*onSelect={handleSelectUser}*/ />
      <button className="btn btn-blue ml-auto mt-2" disabled={!selectedUsers.length} onClick={handleSendEmail}>
        Send Selected
      </button>
      <ToastContainer />
    </div>
  );

  
};
