import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";
import Button from './Button'



function DetailsPopup({props,trigger,setTrigger,handleSave,idSelect}) {
  const [detail,setDetail] = useState({
    id: props.id,
    title:props.title,
    description:props.description,
    price:props.price,
    discountPercentage:props.discountPercentage,
    rating:props.rating,
    stock:props.stock,
    brand:props.brand,
    category:props.category,
    thumbnail:props.thumbnail,
    image:props.image
});


const handleChange = (e) => {
    setDetail((detail) => ({...detail, [e.target.id]:e.target.value}))
}
  return (trigger)?(
    <div className="popup">
        <div className="popup-inner">
        { Object.keys(props).map((key, i) => (
          <form >
            <div class="mb-3 row" key={i}>
            <label class="col-sm-2 col-form-label">{key}</label>
            <div class="col-sm-10">
            <input id={key} type="text" class="form-control" onChange={handleChange} defaultValue={props[key]}></input>
            
            </div>
            </div>
          
            </form>
            
            
        ))}
        <Button text="save" onClickss={() => handleSave(idSelect, detail, setTrigger)}  color="green"/>
         <Button text="Cancel" onClickss={() => setTrigger(false)} color="red"/> 
        
        </div>
    </div>    
  ):"";
}

export default DetailsPopup