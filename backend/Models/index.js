const { Sequelize, DataTypes } = require("sequelize");
const connection = new Sequelize("flowers", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
const testConnection =async ()=>{
  try{
    await connection.authenticate()
    console.log("connection ok")
  }catch(error){
    console.error("failed")
  }
}
testConnection()
const db={}
db.Flower=require("./Flower.model")(connection,DataTypes)
db.User=require("./User.model")(connection,DataTypes)

db.User.hasMany(db.Flower)
db.Flower.belongsTo(db.User)




// connection
// .sync({alter:true})
// .then(()=>{
//   console.log("tables are created")
// }).catch((err)=>{
//  throw err
// })
// db.connection.async({alter:true})


module.exports=db