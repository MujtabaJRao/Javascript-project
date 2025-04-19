function UserGreeting(props){


    const welcome=<h2 className="welcome">Welcome {props.username}</h2>
    const logged_out=<h2 className="login">please login in continue</h2>

    if(props.isloggedin){
            return welcome
        }
        else{
            return logged_out
        }
    
}


export default  UserGreeting