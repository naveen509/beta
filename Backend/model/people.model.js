const mongoose = require("mongoose");

const peopleSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  nameWithInitials: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  joinDate: { 
    type: String, 
    required: true,
},
  salary: {
    type: String,
    required: true,
  },
  personalNotes: {
    type: String,
    required: true,
  },
  preferredName: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  employeeType: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
});

const peoples = new mongoose.model("peoples", peopleSchema);

module.exports = peoples;