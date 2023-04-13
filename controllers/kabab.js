var kabab = require('../models/kabab');

// List of all Costumes
exports.kabab_list = async function(req, res) 
{
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

// VIEWS
// Handle a show all view
exports.kabab_view_all_Page = async function(req, res) 
{
    try{
        theKababs = await kabab.find();
        res.render('kabab', { title: 'Kabab Search Results', results: theKababs });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle Costume create on POST.
exports.kabab_create_post = async function(req, res) {
    console.log(req.body)
    let document = new kabab();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.kabab_style = req.body.kabab_style;
    document.kabab_length = req.body.kabab_length;
    document.kabab_lethality = req.body.kabab_lethality;
    try
    {
        let result = await document.save().then(doc=>{console.log("New Object Saved")});
        res.send(result);
    }
    catch(err)
    {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
    
