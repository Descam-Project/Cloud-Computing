const history_controller = require('../controller/history_controller');

const router = require('express').Router();

router.post('/insertHistory', history_controller.insertHistory);

module.exports = router;