const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const upload = require("../uploads/multer");
const Post = require("../model/post");

const router = new express.Router();

router.post("/post/add", upload.single("PostImage"), async (req, res) => {
  try {
    const data = new Post({
      name: req.body.name,
      location: req.body.location,
      description: req.body.description,
      date: req.body.date,
      PostImage: req.file.filename,
    });

    const saveData = await data.save();

    res.json({
      status: "sucess",
      data: saveData,
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message: e.message,
    });
  }
});

router.get("/post", async (req, res) => {
  try {
    let data = await Post.find();

    data.reverse();

    res.json({
      user: data,
    });
  } catch (e) {
    res.status(500).json({
      status: "error",
      message: e.message,
    });
  }
});

router.get("/image/:id", (req, res) => {
  try {
    const photo = path.join(__dirname, "../uploads/images/", req.params.id);
    fs.readFileSync(photo);
    res.sendFile(photo);
  } catch (e) {
    res.status(404).json({
      status: "Error",
      message: e.message,
    });
  }
});

// router.get("/delete/raj01999/:id", async (req, res) => {
//   try {
//     const photo = path.join(__dirname, "../uploads/images/", req.params.id);
//     await Post.deleteOne({ PostImage: req.params.id });
//     fs.unlinkSync(photo);
//     res.json({
//       status: "Deleted",
//       message: req.params.id,
//     });
//   } catch (e) {
//     res.status(404).json({
//       status: "Error",
//       message: e.message,
//     });
//   }
// });

module.exports = router;
