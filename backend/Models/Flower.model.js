
module.exports = (connection, DataTypes) => {
    const Flower = connection.define(
      "Flower",
      {
        name:{
          type:DataTypes.STRING,
          allowNull:false
        },
        description:{
          type:DataTypes.TEXT,
          allowNull:false
        },
       
          imageUrl: {
            type: DataTypes.TEXT,
            allowNull: false,
            
            
          }
      },
      
    );
    return Flower;
  };
