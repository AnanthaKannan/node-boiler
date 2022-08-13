const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  name:{
    type:String,
    required:true,
    min: 3,
    max: 60
  },
  email:{
    required:true,
    type: String,
  }
});

const Admin = mongoose.model("Admin", adminSchema);
exports.Admin = Admin;