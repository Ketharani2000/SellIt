var db = require("../../config/db.config");

const product = function(){

}

product.getProductDetails = (product_id, result) => {
    const sqlSelect = "select * from product where id=?;"
    db.query(sqlSelect, [product_id], (err, res) => {
        if (err) {
            result(null, err);
            // return;
        }
      
        if (res.length) {
            result(null, res);
            // return res;
        }
        else {
            result({ kind: "not_found" }, null);
        }
    })
}

product.getAllProduct = (product_id, result) => {
    const sqlSelect = "SELECT * FROM product";
    db.query(sqlSelect, [product_id], (err, res) => {
        if (err) {
            result(null, err);
            // return;
        }
      
        if (res.length) {
            result(null, res);
            // return res;
        }
        else {
            result({ kind: "not_found" }, null);
        }
        
      
    })
}

product.addProduct = (newProd, result) => {
    const sqlInsert = ";"
    db.query("INSERT INTO product SET ?", newProd, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("Entry Added: ",res.insertId);
        result(null, "Sucessfully Inserted.");
    });
}



module.exports = product;