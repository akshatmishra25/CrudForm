import user from "../models/user.js";

const deleteUser = async (req, res) => {
    try {
      const userId = req.params.id;
  
      // Mongoose findOneAndDelete method for deleting and returning deleted doc
      const deletedDoc = await user.findOneAndDelete({ _id: userId });
  
      if (!deletedDoc) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  export default deleteUser;