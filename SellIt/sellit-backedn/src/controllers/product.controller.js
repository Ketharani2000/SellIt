productModel = require("../model/product_page.model")

exports.getProductDetails = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    productModel.getProductDetails(req.query.id, (err, data) => {
        
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found product with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error product with id " + req.query.id
                });}
                else{
                    res.send(data);
                }
    });

}


exports.getAllProduct = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    productModel.getAllProduct(req.query.id, (err, data) => {
        
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found varient with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error varient student with id " + req.query.id
                });}
                else{
                    res.send(data);
                }
    });

}

exports.addProduct = (req, res) => {
    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
    }

    const newProduct = new productModel();
    newProduct.type = req.body.type;
    newProduct.brand = req.body.brand;
    newProduct.model = req.body.model;
    newProduct.photo = req.body.photo;
    newProduct.price = req.body.price;
    newProduct.negotiable = req.body.negotiable;
    newProduct.contact_name = req.body.contact_name;
    newProduct.mobile =  req.body.mobile;
    newProduct.NIC = req.body.NIC;
    newProduct.email = req.body.email;
    newProduct.address = req.body.address;
    
    productModel.addProduct(newProduct, (err, data) => {
        
        if (err)
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found varient with id ${req.query.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Error varient student with id " + req.query.id
                });}
                else{
                    res.send(data);
                }
    });

}