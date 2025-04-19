function Button(){
   /* let count=0
    const handleclick=(name) =>{
        if(count<3){
            count++;
            console.log(`${name} you clicked me ${count} times`)
        }

        else{
            console.log(`${name} stop clicking me!`)
        }


    }*/

    //const handleclick2=(name) => console.log(` ${name} stop clicking me`)
   
   const handleclick3=(e) => e.target.textContent='Ouch😢';



    return(<button onClick= {(e) => handleclick3(e)}>Click me 😁</button>);
    //there is also double onclick property it means that you have to click twice to change anything instead of clicking once
    
}
export default Button