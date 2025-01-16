import React,{useState} from 'react'

function Update({element,handelUpdate}) {
    console.log("element",element);
    console.log("handelUpdate",handelUpdate);
    const [name,setName]=useState("")
       const [imageUrl,setImage]=useState("")
       const [description,setdescription]=useState("")
   
   
   
   
   
   
     return (
       <div>
        <input onChange={(e)=>{setName(e.target.value)}} className="form-control form-control-lg" type="text" placeholder="name" aria-label=".form-control-lg example"></input>
        <input onChange={(e)=>{setImage(e.target.value)}} className="form-control form-control-lg" type="text" placeholder="imageUrl" aria-label=".form-control-lg example"></input>
        <input onChange={(e)=>{setdescription(e.target.value)}} className="form-control form-control-lg" type="text" placeholder="description" aria-label=".form-control-lg example"></input>
        <button onClick={()=>{handelUpdate({name:name,imageUrl:imageUrl,description:description},element.id)}} type="button" class="btn btn-warning">update</button>
       </div>
     )
}

export default Update
