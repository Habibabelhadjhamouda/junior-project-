import React, { useState } from 'react'

function Addflower({handelAddFlower}) {
    console.log("function",handelAddFlower);
    const [name,setName]=useState("")
    const [imageUrl,setImage]=useState("")
    const [description,setdescription]=useState("")
     

console.log("name",name);


 


  return (
    <div>
     <input onChange={(e)=>{setName(e.target.value)}} className="form-control form-control-lg" type="text" placeholder="name" aria-label=".form-control-lg example"></input>
     <input onChange={(e)=>{setImage(e.target.value)}} className="form-control form-control-lg" type="text" placeholder="imageUrl" aria-label=".form-control-lg example"></input>
     <input onChange={(e)=>{setdescription(e.target.value)}} className="form-control form-control-lg" type="text" placeholder="description" aria-label=".form-control-lg example"></input>
     <button onClick={()=>{handelAddFlower({name:name,imageUrl:imageUrl,description:description})}} type="button" class="btn btn-warning">Add</button>
    </div>
  )
}

export default Addflower
