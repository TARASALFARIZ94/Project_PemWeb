const express = require('express');
const validateitem = require('../middleware/validateitem');
const ItemController = require('../controller/itemcontroller');
const router = express.Router();

router.post('/', validateitem, ItemController.CreateItem);
router.get('/get', ItemController.GetItems);
router.put('/:id', validateitem, ItemController.updateItem);
router.delete('/:id', ItemController.DeleteItem);

module.exports = router;