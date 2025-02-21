import Product from "../models/Product";
import { registerProductSchema } from "../utils/zodValidation";

export const createProduct = async (req, res) => {
  try {
    const validation = registerProductSchema.safeParse(req.body); //Validate Input

    if (!validation.success) {
      console.log("Product Schema Zod Validation Error");
      return res.status(400).json({ errors: validation.error.errors }); //If validation doesnot succeed return error
    }

    const { name, description, price, category, image } = req.body;

    const product = await Product.create({
      name,
      description,
      price,
      category,
      image,
    });
    await product.save();

    res.status(200).json({
      message: "Product Created Successfully",
      product,
      success: true,
    });
  } catch (error) {
    console.log("error:- ", error);
    res.status(500).json({ message: "Server Error" });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const {productId} = req.params
    const product = await Product.findById(productId);

    if (!product)
      return res.status(404).json({ message: "Product not found" });
    
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      req.params.productId,
      req.body,
      {
        new: true,
      }
    );

    if (!updateProduct)
      return res.status(404).json({ message: "Product not found" });

    res.status(200).json(updateProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const deleteProduct = await Product.findByIdAndDelete(req.params.productId);

  if (!deleteProduct)
    return res.status(404).json({ message: "Product not found" });

  res.status(200).json({ message: "Product deleted successfully" });
};
