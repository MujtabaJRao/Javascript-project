 import React,{useState} from "react";

 function Mycomponent(){

    const [car,setCar]=useState({year:1998,make:'Toyota',model:'Supra'});


   function handleYearChange(event){
    setCar(   c=>({... car,year: event.target.value}));


   }
   
   function handleMakeChange(event){

    setCar(c =>({...car,make:event.target.value}));
    
   }


   function handleModelChange(event){

    setCar(c =>({...car,model:event.target.value}));
    
   }
   
   
   
   
   
   
   
   
   
   return(<><div> 
            <p>Your favourtie car is :{car.year} {car.make} {car.model}</p>
        
            <input type="number"  value={car.year}  onChange={handleYearChange}/><br/>


            <input type="text" value={car.make} onChange={handleMakeChange}/><br/>

            <input type="text" value={car.model} onChange={handleModelChange}/><br/>



           </div></>)

 }
 export default Mycomponent