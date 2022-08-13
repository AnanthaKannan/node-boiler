const { Admin } = require("../model/admin");


exports.post = async(req, res) => {
    console.log('eeeeeeeeeeeeeee')
    const body = req.body;
    const admin = new Admin(body);
    await admin.save();
    return res.status(200).json({
        message: "Admin successfully added.."
    });
}

exports.list = async(req, res) => {
    const queryParams = req.query;
    console.log('queryParams', queryParams)
    const data = await Admin.find({});
    // console.log('data', data)
    return res.status(200).send(data);
}
