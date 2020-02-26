const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  adminName: {
    type: String,
    required: true,
    minlength: 0,
    maxlength: 50,
    default: ""
  },
  mailId:{
    required:true,
  }
});

const Admin = mongoose.model("Admin", adminSchema);
exports.Admin = Admin;