const Product = require("../model/Products");


// get all Product 
exports.getAllProducts = async (req, res) => {
  try {
    const getProducts = await Product.find();
    res.status(200).json(getProducts);
  } catch (error) {
    res.send(error);
  }
};

// get one Product from all 
exports.getOneProduct = async (req , res)=>{
    try {
        const oneProduct = await Product.findById(req.params.id);
        res.send(oneProduct)
    } catch (error) {
        res.send(error)
    }
}

// add Product
exports.addProducts = async (req, res) => {
  try {
    const addProduct = new Product(req.body);
    await addProduct.save();
    res.status(200).json({ message: "Successfully added a Product" });
  } catch (error) {
    res.send("got an error");
  }
};

// update Product
exports.updateProducts = async (req, res) => {
  try {
    const updateProduct = await Product.findById(req.params.id);
    const { title, description, quantity, price } = req.body;

    updateProduct.title = title ? title : updateProduct.title;
    updateProduct.description = description ? description : updateProduct.description;
    updateProduct.quantity = quantity ? quantity : updateProduct.quantity;
    updateProduct.price = price ? price : updateProduct.price;

    updateProduct.save();
    res.status(200).json({ message: "Successfully Updated a Product" });
  } catch (error) {
    res.send(error);
  }
};

// delete Product
exports.deleteProducts = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id);
    res.status(200).send(deleteProduct);
  } catch (error) {
    res.send(error);
  }
};
