const { Admin } = require("../model/admin");

exports.check = (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "Api called successfully..",
        data: []
    });
}

exports.dbcheck = (req, res) => {
    Admin.find({})
        .then((data) => {
            return res.status(200).json({
                status: 200,
                message: "All User fetched Successfully !",
                data: Userlist
            });
        })
        .catch((error) => {
            return res.status(400).json({
                status: 200,
                message: "something went wrong",
                data: Userlist
            });
        });
};