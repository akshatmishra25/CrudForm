import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import users from "./models/user.js";
import cors from "cors";
import usersController from "./controllers/usersController.js";
import updateUser from "./controllers/usersUpdater.js";
import deleteUser from "./controllers/usersDeleter.js";


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(cors({origin: "*"}));

mongoose.connect(process.env.MONGO_DB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

app.use(express.json());

app.get('/users', async (req, res) => {
    try {
      const user = await users.find();
      res.json(user);
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  });
  
  app.post('/users', usersController);

  app.put('/users/:id', updateUser);

  app.delete('/users/:id', deleteUser);

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)
})