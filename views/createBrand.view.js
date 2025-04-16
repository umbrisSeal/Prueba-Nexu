
async function createBrandView(res) {

    if(res.error) {
        res.status(res.customStatus).send(res.errorMessage);
    } else {
        res.status(201).send("Brand created.");
    }

}

module.exports = createBrandView;