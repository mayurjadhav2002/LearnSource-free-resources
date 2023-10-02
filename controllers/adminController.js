const Image = require('../models/imageModel');

const imageFunction = async (req, res) => {
    try {
             const image = req.file.filename;
             const user = new Image({
                user: req.body.name,
                created_by: req.body.id,
                image: req.file.filename
            });

            const data = await user.save();
            if (data) { res.status(200).send({ msg: "data uploaded", url: image }) }
            else {
                res.status(400).send({ msg: "error uploading the data" });
            }
        

    } catch (error) {
        res.status(400).send(error.message)
    }
}


module.exports = {imageFunction}