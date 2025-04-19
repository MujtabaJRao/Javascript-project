import React,{useState} from "react"


function Mycomponent(){

const [name,setName]=useState('guest');
//guest is inital guest
const [age,setAge]=useState(0);

const [isEmployed,setisEmployed]=useState(false);

const updateName=() => {
        setName('Aiden Pearce');
    }

    const incrementAge=() => {
        setAge(age+1);
    }
    const Employed= () =>  {

            setisEmployed(!isEmployed);
    }

return(
    <div>
        <p>Name: {name}</p>
        <button  onClick={updateName}   >  Set Name  </button>

        <p>Age: {age}</p>
        <button  onClick={incrementAge}   >  Set Age  </button>


        <p>Employed status: {isEmployed ? 'Yes' : 'No'}</p>
        <button  onClick={Employed}   >  Toggle status  </button>

    </div>
);



}
export default Mycomponent