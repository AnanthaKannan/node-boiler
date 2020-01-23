const { Admin } = require("../model/admin");

exports.check = (req, res) => {
    console.log("called")
    return res.status(200).json({
        status: 200,
        message: "Api called successfully..",
        data: []
    });
}

exports.checkPost = (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "Api called successfully..",
        data: []
    });
}

exports.checkPut = (req, res) => {
    return res.status(200).json({
        status: 200,
        message: "Api called successfully..",
        data: []
    });
}

exports.checkDelete = (req, res) => {
    const id = req.params.id, //assume get 54fcb3890cba9c4234f5c925
    commentid = req.params.commentid; // assume get 54fcb3890cba9c4234f5c925

    return res.status(200).json({
        status: 200,
        message: "Api called successfully..",
        data: {id, commentid}
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