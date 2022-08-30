const mongoose = require("mongoose");

const DB = "mongodb+srv://gaurav:ghosh@cluster0.k7mpx.mongodb.net/instaclone?retryWrites=true&w=majority";
main().then(()=>{console.log("connected to database!")}).catch((err) => console.log(err));

async function main() {
  await mongoose.connect(DB);
}

module.exports = main;
