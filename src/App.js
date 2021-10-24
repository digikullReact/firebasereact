import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { Input,Container } from 'semantic-ui-react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Protectedroutes from './auth/Protectedroutes';


function App() {
  return (
    <Container>
<Router>
      

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
          <Protectedroutes exact path="/home" component={(props)=><Home {...props}/>}  />
        </Switch>
    
    </Router>

      
    
  </Container>
  );
}

export default App;
