import React from 'react'; 
import Update from './Update.jsx'; 

function ListFlowers({ flower, handelUpdate,handelDelete }) {
  console.log("data is here", flower);

  return (
  
    <div className="container">
          <h1  className='text-center text succses my-5'> 10 of the World’s Most Beautiful Flowers</h1>
      <div className="row">
        {flower.map((element, index) => (
          <div key={index} className="col-md-4 mb-3">
            <div className="card">
            <button onClick={()=>(handelDelete(element.id))} type="button" class="btn btn-dark">Delete</button>
              <img
                src={element.imageUrl}
                className="card-img-top img-fluid"
                alt={element.name}
              />
              <div className="card-body">
                <h5 className="card-title">{element.name}</h5>
                <p className="card-text">{element.description}</p>
                <a href="#" className="btn btn-primary">delete</a>
              </div>
             
              <Update handelUpdate={handelUpdate} element={element} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListFlowers;

