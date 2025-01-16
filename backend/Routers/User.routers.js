const  express =require("express")
const Router = express.Router();
const { getAllUsers,  addUser,getOneUser,updateUser,deleteuser}=require("../Controllers/User.controle")



Router.get("/get", getAllUsers);
Router.post("/add", addUser)
Router.get("/:id",getOneUser)
Router.put("/update/:id", updateUser)
Router.delete("/delete/:id",   deleteuser)
module.exports = Router;