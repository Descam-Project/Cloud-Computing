const result_controller = require('../controller/result_controller');

const router = require('express').Router();

router.post('/Result', result_controller.Result);

module.exports = router;