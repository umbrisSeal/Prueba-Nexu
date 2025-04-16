
async function getBrandsView(res) {
    if(res.error) {
        res.status(500).send("Internal Server Error.");
        return;
    }

    res.data.forEach( (result) => {
        result.average_price = Number(result.average_price);
    });

    res.status(200).json(res.data);
}


module.exports = getBrandsView;