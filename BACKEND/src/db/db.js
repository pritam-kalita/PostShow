const mongoose = require('mongoose');

const connectDB = async () => {
   await mongoose.connect("mongodb+srv://pritam:CXmX8xWesRQHiWSP@backend.cdnzlnr.mongodb.net/project-1")
   console.log("database connected");
};

module.exports = connectDB;