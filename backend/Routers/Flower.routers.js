const  express =require("express")
const Router = express.Router();
const { getAllFlowers,addflower,getOneFlower, updateFlower,deleteFlower}=require("../Controllers/Flower.controle")



Router.get("/get",getAllFlowers);
Router.post("/add",addflower)
Router.get("/:id",getOneFlower)
Router.put("/update/:id", updateFlower)
Router.delete("/delete/:id",deleteFlower)
module.exports = Router;