const express = require('express');
const {hashPassword} = require('../middlewares/hashPassword');
const callController = require('../controllers/callController');
const userController = require('../controllers/userController');
const possibleWorkController = require('../controllers/possibleWorkController');
const contactController = require('../controllers/contactController');
const commentController = require('../controllers/commentController');
const contractController = require('../controllers/contractController');
const enterpriseController = require('../controllers/enterpriseController');

const {validateBody} = require('../middlewares/validators');
const {
    createCallBodySchemes,
    createUserBodySchemes,
    createContactBodySchemes,
    createCommentBodySchemes,
    createEnterpriseBodySchemes,
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
router.put('/enterprise/:id', validateBody(createCallBodySchemes), enterpriseController.updateEnterprise);

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

//call routes
router.post('/enterprise/:id/call', callController.createCall);
router.get('/user/:id/call', callController.getAllUserCalls);
router.get('/call/:id', callController.getCallById);
router.put('/call/:id', callController.updateCall);

//PossibleWork routes
router.post('/enterprise/:id/possibleWork', possibleWorkController.createPossibleWork);
router.get('/user/:id/possibleWork', possibleWorkController.getAllUserPossibleWorks);
router.get('/possibleWork/:id', possibleWorkController.getPossibleWorkById);
router.put('/possibleWork/:id', possibleWorkController.updatePossibleWork);

//Contracts routes
router.post('/enterprise/:id/contract', contractController.createContract);
router.get('/user/:id/contract', contractController.getAllUserContracts);
router.get('/contract/:id', contractController.getContractById);
router.put('/contract/:id', contractController.updateContract);



module.exports = router;