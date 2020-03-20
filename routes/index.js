const express = require('express');
const {hashPassword} = require('../middlewares/hashPassword');
const userController = require('../controllers/userController');
const enterpriseController = require('../controllers/enterpriseController');

const {validateBody} = require('../middlewares/validators');
const {createUserBodySchemes, createEnterpriseBodySchemes} = require('../yupSchemes/yupSchemes');

const router = express.Router();

router.post('/user', validateBody(createUserBodySchemes),  hashPassword, userController.createUser);
router.get('/user/:id', userController.getUserById);


router.post('/user/:id/enterprise', validateBody(createEnterpriseBodySchemes), enterpriseController.createEnterprise);
router.get('/enterprises', enterpriseController.getAllEnterprises);
router.get('/user/:id/enterprises', enterpriseController.getUserEnterprises);
router.get('/enterprises/:id', enterpriseController.getEnterprisesById);
router.put('/enterprises/:id', enterpriseController.updateEnterprise);

module.exports = router;