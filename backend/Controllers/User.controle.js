const {where}=require("sequelize")
const {User}=require("../Models/index")

module.exports={
    getAllUsers:async (req, res) => {
        try{
          const users=await User.findAll()
          res.status(200).send(users)
        }catch(error){
          res.status(500).send(error)
        }
      },

      addUser: async (req, res) => {
        try{
          const {name,email,password}=req.body
          const newuser = await User.create({name,password,email})
          res.status(201).send({
            succes:"user is added",
           user:newuser
          })
        }catch(error){
          throw error
        }
      },

      getOneUser:async (req,res)=>{
        const {id}=req.params
        try{
          const users=await User.findOne({
            where:{id}
          })
          res.send(users)
        }catch(error){
          res.status(500).send(error)
        }
      },

      updateUser: async (req,res)=>{
        const {id}=req.params
        const {name,password,email}=req.body
        if(!id){
          res.status(404).send({message:"id is not found"})
        }
        const user =await User.findOne({id})
        if(!user){
          res.status(401).send({message:"user not found"})
        }
        const updateuser= await User.update(
          {
            name:name||user.name,
            password:password||user.password,
            email :email|| user.email
          },{
            where:{
              id
            }
          }
        )
        res.send({message:"user is updated",updateuser})
      },


      deleteuser:async (req,res)=>{
        const {id}=req.params
        try{
          if(!id){
            res.status(404).send({message:"id is not found"})
          }
          const user=await User.destroy({
            where:{
              id:id
            }
          })
          return res.send({message:"user is deleted",user})
        }catch(error){
          throw error
        }
       }
}