
function createModelView(res) {
    
    if(res.error) {
        res.status(res.customStatus).send(res.errorMessage);
    } else {
        res.status(201).send("Model created.");
    }
}

module.exports = createModelView;