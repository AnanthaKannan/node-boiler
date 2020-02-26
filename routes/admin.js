const express = require("express");
const router = express.Router();
const AdminController = require('../controllers/admin');


// add admin
router.post('/addAdmin', AdminController.addAdmin);
// get all
router.get('/getAdmin', AdminController.getAdmin);
// get by mail id
router.get('/getAdminByMail', AdminController.getAdminByMail);
// update
router.put('/updateAdminByMail/:old_email/:new_email', AdminController.updateAdminByMail)
// delete mail id
router.delete('/deletAdminById/:_id', AdminController.deletAdminById)

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