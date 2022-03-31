'use strict';
const connectToDatabase = require('./utils/dbConnect');
const Product = require('./models/Product');
require('dotenv').config({ path: './variables.env' });

module.exports.getProducts = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  try {
    await connectToDatabase();
    const products = await Product.find();

    return {
      statusCode: 200,
      body: JSON.stringify(products)
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: 'Could not fetch products'
      })
    }
  }
};

module.exports.getProductsById = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    await connectToDatabase();
    const product = await Product.findById(event.pathParameters.id);

    return {
      statusCode: 200,
      body: JSON.stringify(product)
    };
  } catch (err) {
    return {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({
        error: 'Could not fetch product'
      })
    }
  }
};

