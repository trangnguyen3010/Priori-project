

const express = require("express");


const router = express.Router();
const registerLogic = require("../controller/registrationLogic");

router.post("/", (req, res) => {
    
    registerLogic.userCheck(req.body)
    .then(resolve => {
        registerLogic.createUser(req.body)
        .then(resolve => {
            res.status(200).json(resolve);
            return;
        })
        .catch(reject => {
            var errors = [reject]
            res.status(422).json(errors);
            return;
        })
    })
    .catch(reject => {
        res.status(422).json(reject);
        return;
    })

})


module.exports = router;