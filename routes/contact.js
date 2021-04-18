// require express
const express = require("express");
//require express.router pour créer les routes
const router = express.Router();
//require model contact
const Contact = require("../models/Contact");
// require controllers
const controller = require("../controllers/contactcontrollers");

///// Les routes kol hne

//test route pour savoir si c bon l'express.router fonctionne les routes ou nn
/**
 * @description : testing route
 * @path : http://localhost:5000/api/contacts/test
 * @method : Get
 * @Data : no data
 * @access : public / private
 */
router.get("/test", (req, res) => {
  res.send("hello world");
});
/**
 * @description : add contact
 * @path : http://localhost:7000/api/contacts/
 * @method : Post
 * @Data : req.body
 * @access : public / private
 */
router.post("/", controller.addcontact);
/**
 * @description : get all contact
 * @path : http://localhost:5000/api/contacts/
 * @method : Get
 * @Data : no data
 * @access : public / private
 */
router.get("/", controller.getallcontact);
/**
 * @description : get contact
 * @path : http://localhost:5000/api/contacts/:id
 * @method : Get
 * @Data : req.params.id
 * @access : public / private
 */
router.get("/:id", controller.getcontact);
/**
 * @description : Delete contact
 * @path : http://localhost:5000/api/contacts/:_id
 * @method : delete
 * @Data : req.params._id
 * @access : public / private
 */
router.delete("/:_id", controller.deletecontact);
/**
 * @description : Update route
 * @path : http://localhost:5000/api/contacts/:_id
 * @method : Put
 * @Data : req.params._id & req.body
 * @access : public / private
 */

router.put("/:_id", controller.updatecontact);

module.exports = router;
