const express = require("express");
const App = express();
const db=require("./Models/index")
const FlowerRoute=require("./Routers/Flower.routers")
const UserRoute=require("./Routers/User.routers")
const port = 5000;
const cors=require("cors") 




App.use(express.json())
App.use(cors())
App.use("/api/flower",FlowerRoute)
App.use("/api/user",UserRoute)
App.listen(port, () => {
  console.log(`app listening on http://127.0.0.1:${port}`);
});
