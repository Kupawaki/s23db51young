var kabab = require('../models/kabab');

// Return a list of all kabab objects
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

// Return a kabab object by its ID
exports.kabab_detail = async function(req, res) 
{
    try 
    {
        result = await kabab.findById(req.params.id)
        res.send(result)
    } 
    catch (error) 
    {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
exports.kabab_update_put = async function(req, res) 
{
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try 
    {
        let toUpdate = await kabab.findById(req.params.id)
        
        if(req.body.kabab_style)
            toUpdate.kabab_style = req.body.kabab_style;
        if(req.body.kabab_length)  
            toUpdate.kabab_length = req.body.kabab_length;
        if(req.body.kabab_lethality) 
            toUpdate.kabab_lethality = req.body.kabab_lethality;
        
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } 
    catch (err) 
    {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}failed`);
    }
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
    
