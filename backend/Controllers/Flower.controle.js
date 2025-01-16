const {where}=require("sequelize")
const {Flower}=require("../Models/index")

module.exports={
    getAllFlowers:async (req, res) => {
        try{
          const flowers=await Flower.findAll()
          res.status(200).send(flowers)
        }catch(error){
          res.status(500).send(error)
        }
      },

      addflower: async (req, res) => {
        try{
          const {name,description, imageUrl}=req.body
          const newFlowers = await Flower.create({name,description, imageUrl})
          res.status(201).send({
            succes:"Flower is added",
           Flower:newFlowers
          })
        }catch(error){
          throw error
        }
      },

      getOneFlower:async (req,res)=>{
        const {id}=req.params
        try{
          const flowers=await Flower.findOne({
            where:{id}
          })
          res.send(flowers)
        }catch(error){
          res.status(500).send(error)
        }
      },

      updateFlower: async (req,res)=>{
        const {id}=req.params
        const {name,description, imageUrl}=req.body
        if(!id){
          res.status(404).send({message:"id is not found"})
        }
        const flower =await Flower.findOne({id})
        if(!flower){
          res.status(401).send({message:"flower not found"})
        }
        const updateflower= await Flower.update(
          {
            name:name||flower.name,
            description:description||flower.description,
  
            imageUrl:imageUrl|| flower. imageUrl
          },{
            where:{
              id
            }
          }
        )
        res.send({message:"flower is updated",updateflower})
      },


      deleteFlower:async (req,res)=>{
        const {id}=req.params
        try{
          if(!id){
            res.status(404).send({message:"id is not found"})
          }
          const flowers=await Flower.destroy({
            where:{
              id:id
            }
          })
          return res.send({message:"flower is deleted",flowers})
        }catch(error){
          throw error
        }
       }
}