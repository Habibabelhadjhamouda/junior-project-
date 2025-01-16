
import "./App.css" 
import React, { useState,useEffect } from "react";
import axios from 'axios'
import Listeflowers from "./Comonents/Listflowers.jsx";
import Addflower from "./Comonents/Addflower.jsx";
// import Update from "./components/Update.jsx";


const App =()=> {
const [flower,setflower]=useState([])
const[view,setView]=useState("home")
console.log("flower",flower);



const fetch=(()=>{
axios.get("http://localhost:5000/api/flower/get")

  .then((resp)=>{setflower(resp.data)})
  .catch((error)=>{console.log(error);
  })
})

useEffect(()=>{fetch()},[])


const handelAddFlower=((body)=>{
  axios.post("http://localhost:5000/api/flower/add",body)

  .then((resp)=>{console.log("added successfuly");fetch()
  })
  .catch((error)=>{console.log(error);
  })
})

const handelView=(view)=>{
  console.log(view);
  setView(view)
  }



  const handelUpdate=((body,id)=>{
    axios
    .put(`http://localhost:5000/api/flower/update/${id}`,body)//url
    .then((resp)=>{console.log("updated sucessfully");fetch()})
    .catch((error)=>{console.log(error);
    })
      })

const handelDelete=((id)=>{
  axios
  .delete(`http://localhost:3000/api/prod/delete/${id}`)//url
  .then((resp)=>{console.log("Deleted sucessfully");fetch()})
  .catch((error)=>{console.log(error);
  })
    })

return(
  <div>
    <button onClick={()=>{handelView("add")}} >add</button>
    <button onClick={()=>{handelView("home")}} >home</button>
  
 <Listeflowers handelUpdate={handelUpdate}  handelDelete={handelDelete} flower={flower}/>
<Addflower handelAddFlower={handelAddFlower} handelView={view}/>



  </div>
) 

}

export default App;
