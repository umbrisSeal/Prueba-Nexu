
function getFilteredModelView(res) {

    if(res.error) {
        res.status(res.customStatus).send(res.errorMessage);
    } else {
        res.status(200).json(res.data);
    }

}

module.exports = getFilteredModelView;