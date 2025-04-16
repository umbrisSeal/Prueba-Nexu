
function editModelView(res) {

    if(res.error) {
        res.status(res.customStatus).send(res.errorMessage);
    } else {
        res.status(200).send("Model updated.");
    }

}

module.exports = editModelView;