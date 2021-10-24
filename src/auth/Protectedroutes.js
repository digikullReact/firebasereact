import React from 'react'

import {Route,Redirect} from 'react-router-dom';

 
export default function Protectedroutes({component:Component,...rest}) {

    const auth=localStorage.getItem("token");
    return (
       <Route
       {...rest}
       render={props=>{
           if(auth)
           {
            return <Component {...props} />
           }
else{
    return(
        <Redirect
        to={{
            pathname:"/login",
            state:{
                from:props.location
            }
    
        }}
        
        />

    )

  
   
}


        
       }}
       
       
       
       
       />
    )
}