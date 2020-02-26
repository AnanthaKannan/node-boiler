const express = require("express");
const router = express.Router();
const AdminController = require('../controllers/admin');



// create the new admin
router.post('/add_amim', AdminController.checkPost);

// get the data
router.get('/check', AdminController.check);

// update the collection
router.put('/checkput', AdminController.checkPut)

// delete the collection
router.delete('/checkdelete/:id/:commentid', AdminController.checkDelete)

module.exports = router;



// const auth = require("../middleware/auth");
// const isAdmin = require("../middleware/admin");

// router.get("/listUsers", [auth, isAdmin], async (req, res) => {
//     User.find({}, function (err, Userlist) {
//         return res.status(200).json({
//             status: 200,
//             message: "All User fetched Successfully !",
//             data: Userlist
//         });
//     });
// });