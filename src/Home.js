import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { getAuth, signOut } from "firebase/auth";
import {useHistory} from 'react-router-dom';


function Home() {
  const history=useHistory();


  const auth = getAuth();


  const logout=()=>{

    signOut(auth).then(() => {
     
      localStorage.removeItem("token");
      history.push("/login")


    }).catch((error) => {
      // An error happened.
    });

  }
    return (
        <Grid celled style={{marginTop:"40px"}}>

          <span onClick={logout}  style={{cursor:'pointer'}}>Logout</span>
            
          
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column width={13}>
            <Image src='https://react.semantic-ui.com/images/wireframe/centered-paragraph.png' />
          </Grid.Column>
        </Grid.Row>
    
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
          <Grid.Column width={10}>
            <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
}

export default Home
