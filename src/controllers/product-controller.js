const Product = require("../models/product-model");

const getProducts = async (req, reply) => {
  const products = await Product.find();
  return products;
};

const getProduct = async (req, reply) => {
  const product = await Product.findById(req.params.id);
  return reply.code(200).send(product);
};

const createProduct = async (request, reply) => {
  const newProduct = new Product(request.body);
  console.log(newProduct);

  await newProduct.save();
  reply.code(201).send(newProduct);
};

const deleteProduct = async (req, reply) => {
  await Product.findByIdAndDelete(req.params.id);
  reply.code(204).send();
};

const updateProduct = async (req, reply) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    reply.code(200).send(product);
  } catch (error) {
    reply.code(500).send(error);
  }
};

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
