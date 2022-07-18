const mongoose = require('mongoose');

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://0.0.0.0:27017/deep-thoughts";

mongoose.connect(
MONGODB_URI,
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;