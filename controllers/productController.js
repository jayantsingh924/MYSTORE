
const products = [
    {
        id : 1,
        productname : "Apple",
        price : "100",
        img : "apples.jpg"
    },
    {
        id : 2,
        productname : "Banana",
        price : "30",
        img : "bananas.jpg"
    }
]


exports.renderProducts = (req, res) => {
    res.render("home", {products:products});
} 

exports.renderAddProduct = (req, res) => {
    res.render("add-product");
} 

exports.renderEditProduct = (req, res) => {
    res.render("edit-product");
} 
