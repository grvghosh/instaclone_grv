const connectDB = require("./connections/connectDB");
const express = require("express");
const cors = require("cors");
const postRouter = require("./routes/postRoutes");
const path = require("path");
const PORT = process.env.PORT || 3004;

const app = express();

connectDB();

app.use(cors());
//app.use(express.json({limit:"30mb", extended: true}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use("/api", postRouter);

app.get("/", (req, res) => {
  res.json({
    status: "Server is Running",
  });
});

// if(process.env.NODE_ENV === "production")
// {
//   app.use(express.static(path.join(__dirname, '/frontend_instaClone/build')))
//   app.get('*', (req,res) => {
//     res.sendFile(path.join(__dirname, 'frontend_instaClone' , 'build', 'index.html'))
//   })
// }
// else
// {
//   app.get('/', (req,res)=>{
//     res.send("api running!")
//   })
// }
app.listen(PORT, () => {
  console.log("Server is running ...");
});
