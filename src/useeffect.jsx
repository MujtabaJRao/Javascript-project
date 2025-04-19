import React,{useState,useEffect} from "react";

function Mycomponent(){

    /*const [count,Setcount]=useState(0);
    
    const [color,Setcolor]=useState('blue');



    useEffect(() =>{
        document.title=`Count: ${count} ${color}`;
        return ()=>{
            //some clean up code
        }

    },[count,color])
    
    function addCount(){
        Setcount(c =>c+1)
    }
    
    function subtractcount(){
        Setcount(c =>c-1)
    }

    function changeColor(){
        Setcolor(c => c === 'green' ? 'red' : 'green' ) 
    }


return(<>
        <p style={{color:color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractcount}>Subtract</button><br />
        <button onClick={changeColor}>Change color </button>

</>);*/

const [width,setWidth]=useState(window.innerWidth);
const [height,setHeight]=useState(window.innerHeight);



useEffect(()=>{
    
window.addEventListener('resize',handleResize)
console.log('eventlistener added')
return()=>{
    window.removeEventListener('resize',handleResize);
    console.log('event listener removed')
}
},[])

useEffect(()=>{
    document.title=`Size ${width} x ${height}`
},[width,height]);




function handleResize(){
setWidth(window.innerWidth);
setHeight(window.innerHeight);
}




return(<>
<p>window witdh: {width}</p>
<p>window height: {height}</p>

</>)

}

export default Mycomponent;