const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  location: {
    type: String,
    required: true,
  },

  likes: {
    type: String,
    required: true,
    default: 0,
  },

  description: String,

  PostImage: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
});

module.exports = new mongoose.model("post", postSchema);
