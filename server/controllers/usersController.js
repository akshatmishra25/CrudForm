import express from "express";
import mongoose from "mongoose";
import userSchema from "../models/user.js";
const createUser = async (req, res) => {
    //console.log(req.body);
    try {
      // Extract user data from the request body
      const { name, email, phoneNumber, hobbies } = req.body;
  
      // Basic validation (optional, enhance based on your needs)
      if (!name || !email) {
        return res.status(400).json({ message: 'Name and Email are required' });
      }
  
      // Create a new user object
      const newUser = new userSchema({
        name,
        email,
        phoneNumber,
        hobbies,
      });
  
      // Save the new user to the database
      const savedUser = await newUser.save();
  
      // Send successful response with the created user
      res.status(201).json(savedUser);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  }

export default createUser;
