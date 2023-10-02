const express = require('express');
const software_route = express()
const bodyParser = require('body-parser');



software_route.use(bodyParser.json());
software_route.use(bodyParser.urlencoded({extended:true}));
const software_controller = require('../controllers/softwareController');
software_route.get('/', software_controller.pagination);
software_route.get('/coupon', software_controller.coupon_by_id)
software_route.get('/total', software_controller.get_total)
software_route.get('/recent', software_controller.topCards)

module.exports = software_route;