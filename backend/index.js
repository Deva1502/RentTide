import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public")); // Serve static files from "public" directory

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Start Server
app.listen(3000, (err) => {
  if (err) {
    console.error("Error starting server:", err.message);
  } else {
    console.log("Server is running on port 3000");
  }
});
