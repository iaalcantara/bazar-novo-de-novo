const express = require("express");
const controller = require('../controllers/userController');
const router = express.Router();

router.post('/novo', controller.cadastrarUser);
router.get('/todos', controller.getAll);
router.get('/:id', controller.getId);
router.patch('/:id/like', controller.like);
router.delete('/:id/remove', controller.removeUser);
router.put('/:id/update', controller.updateUser)

module.exports = router;