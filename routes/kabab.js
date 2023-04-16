var express = require('express');
const kabab_controllers= require('../controllers/kabab');
var router = express.Router();

/* GET kabab */
router.get('/', kabab_controllers.kabab_view_all_Page );
// GET detail page
router.get('/detail', kabab_controllers.kabab_view_one_Page);
// GET create page
router.get('/create', kabab_controllers.kabab_create_Page);
/* GET update page */
router.get('/update', kabab_controllers.kabab_update_Page);
/* GET delete page */
router.get('/delete', kabab_controllers.kabab_delete_Page);


module.exports = router;

