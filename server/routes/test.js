const { kishan } = require("../controllers/userController");

const router= require("express").Router();

router.get("/",kishan);

module.exports=router;
