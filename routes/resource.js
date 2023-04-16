var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var kabab_controller = require('../controllers/kabab');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/kabab', kabab_controller.kabab_create_post);
// DELETE request to delete Costume.
router.delete('/kabab/:id', kabab_controller.kabab_delete);
// PUT request to update Costume.
router.put('/kabab/:id', kabab_controller.kabab_update_put);
// This runs when you recieve a GET request for a kabab ID.
router.get('/kabab/:id', kabab_controller.kabab_detail);
// GET request for list of all Costume items.
router.get('/kabab', kabab_controller.kabab_list);
module.exports = router;