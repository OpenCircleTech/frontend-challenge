const { Router } = require('express');
const userController = require('./App/controllers/userController');



const router = Router();

router.get('/', function (req, res){
  res.send("Olá, estamos no ar!");
 });

router.post('/auth', userController.login);
router.post('/createAccount', userController.store);

module.exports = router;
