import React,{useState} from 'react'
import app from './firebase'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Grid,Image,Input,Button} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom';



function Login() {

    const history=useHistory();


    const [state, setstate] = useState({
        email:"",
        password:""
    })

    const handleChange=(event)=>{

        setstate({...state,[event.target.name]:event.target.value});

    }


    const handleLogin=()=>{


        signInWithEmailAndPassword(auth, state.email, state.password)
        .then((userCredential) => {

            // token here // which you can save in your localstorage --->
            const user = userCredential.user;
            localStorage.setItem("token",user.accessToken);

            history.push("/home");

        

           
          // Signed in 
        
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });

    }

    const auth = getAuth();
    return (
        <Grid columns={3} >
            <Grid.Row style={{marginTop:"100px"}}>
            <div style={{textAlign:'center', marginLeft:"500px"}}>
                <h1>Login Here</h1>

            </div>
            </Grid.Row>
          
     
    
        <Grid.Row style={{marginTop:"100px"}}>
       
      
          <Grid.Column width={10} stretched style={{marginLeft:"200px"}}>
          <Input placeholder='Email' name="email"  onChange={handleChange}/>
          <br/>
          <Input placeholder='Password'  name="password" onChange={handleChange}/>
          <br/>

          <Button primary onClick={handleLogin}>Login</Button>
          
          </Grid.Column>
         
        </Grid.Row>
      </Grid>
    )
}

export default Login
