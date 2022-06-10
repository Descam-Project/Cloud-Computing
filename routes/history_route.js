const history_controller = require('../controller/history_controller');

const router = require('express').Router();

router.post('/addHistory', history_controller.addHistory);

module.exports = router;