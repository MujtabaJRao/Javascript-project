import React,{useState} from "react"

function ToDolist(){


const [tasks,setTasks]=useState(['Eat Break fast🥞',"Take a Shower🚿","Walk the dog🐶"]);
const [newTask,setNewTask]=useState("");


function handleInputChange(event){
    setNewTask(event.target.value);

}


function addATask(event){
   
    if(newTask.trim() !== ""){
    setTasks(t=>[...t,newTask]);
        setNewTask("")

    }
}

function deleteTask(index){

    const updatedTasks=tasks.filter((_,i) => i !== index)
    setTasks(updatedTasks);


}




function moveTaskUp(index){
        if(index>0){
            const updatedTasks=[...tasks];
            [ updatedTasks[index],updatedTasks[index-1]]=[updatedTasks[index-1],updatedTasks[index]];
            setTasks(updatedTasks);
        }
        
}


function moveTaskDown(index){
    if(index<tasks.length-1){
        const updatedTasks=[...tasks];
        [ updatedTasks[index],updatedTasks[index+1]]=[updatedTasks[index+1],updatedTasks[index]];
        setTasks(updatedTasks);
    }

}


return(<>
    <div className="to-do-list">

    <h1>To-Do-List</h1>

        <div>

            <input type="text" name="" id="td" placeholder="Enter A Task...." value={newTask} 
            
        onChange={handleInputChange}/>

        <button className="add-button" onClick={addATask} >

            Add
        </button>
        </div>

<ol>
    {tasks.map((task,index) => <li key={index}>

        <span className="text"> {task}</span>
       
        <button className="Delete-Button" 
        onClick={()=> deleteTask(index)}> Delete</button>
   

   <button className="move-Button" 
        onClick={()=> moveTaskUp(index)}> 👆</button>


<button className="move-Button" 
        onClick={()=> moveTaskDown(index)}> 👇</button>

    </li>)}
</ol>

    </div>
 </>);





}
export default ToDolist