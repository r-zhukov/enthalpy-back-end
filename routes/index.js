const express = require('express');
const {hashPassword} = require('../middlewares/hashPassword');
const userController = require('../controllers/userController');
const contactController = require('../controllers/contactController');
const commentController = require('../controllers/commentController');
const enterpriseController = require('../controllers/enterpriseController');

const {validateBody} = require('../middlewares/validators');
const {
    createUserBodySchemes,
    createEnterpriseBodySchemes,
    createContactBodySchemes,
    createCommentBodySchemes,
  } = require('../yupSchemes/yupSchemes');

const router = express.Router();

//User routes
router.post('/user', validateBody(createUserBodySchemes), hashPassword, userController.createUser);
router.get('/user/:id', userController.getUserById);
router.get('/user', userController.getAllUsers);

//Enterprise routes
router.post('/user/:id/enterprise', validateBody(createEnterpriseBodySchemes), enterpriseController.createEnterprise);
router.get('/enterprise', enterpriseController.getAllEnterprises);
router.get('/user/:id/enterprise', enterpriseController.getUserEnterprises);
router.get('/enterprise/:id', enterpriseController.getEnterprisesById);
router.put('/enterprise/:id', enterpriseController.updateEnterprise);

//Contact routes
router.post('/enterprise/:id/contact', validateBody(createContactBodySchemes), contactController.createContact);
router.put('/contact/:id', contactController.updateContact);
router.get('/enterprise/:id/contact', contactController.getAllEnterpriseContact);
router.get('/contact/:id', contactController.getContactById);

//Comment routes
router.post('/enterprise/:id/comment', validateBody(createCommentBodySchemes), commentController.createComment);
router.put('/comment/:id', commentController.updateComment);
router.get('/enterprise/:id/comment', commentController.getEnterpriseComments);
router.get('/comment/:id', commentController.getCommentById);

module.exports = router;