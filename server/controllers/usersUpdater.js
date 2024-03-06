import user from "../models/user.js";

const updateUser = async (req, res) => {
    try {
      const userId = req.params.id; // Get user ID from request parameter
  
      // Extract updated user data from request body (optional)
      const updatedUser = {
        name: req.body.name, // Update specific fields if provided
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        hobbies: req.body.hobbies,
      };
  
      // Mongoose findOneAndUpdate method for updating existing document
      const updatedDoc = await user.findOneAndUpdate(
        { _id: userId }, // Find by ID
        updatedUser, // Update data
        { new: true } // Return the updated document
      );
  
      if (!updatedDoc) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json(updatedDoc); // Send back the updated user
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };

  export default updateUser;
  