
function getFilteredBrandsView(res) {

    if(res.error) {
        res.status(res.customStatus).send(res.errorMessage);
    } else {
        res.data.forEach( (element) => {
            element.average_price = Number(element.average_price);
        });
        res.status(200).json(res.data);
    }
    
}

module.exports = getFilteredBrandsView;