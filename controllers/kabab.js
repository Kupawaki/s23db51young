var kabab = require('../models/kabab');

// List of all Costumes
exports.kabab_list = async function(req, res) {
    try
    {
        theKababs = await kabab.find();
        res.send(theKababs);
    }
    catch(err)
    {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
    };

// for a specific Costume.
exports.kabab_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Costume detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.kabab_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Costume create POST');
};
// Handle Costume delete form on DELETE.
exports.kabab_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Costume delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.kabab_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Costume update PUT' + req.params.id);
};
