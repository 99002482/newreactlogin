import React from 'react';  
import './App.css';  
import Login from './Login';  
import Dashboard from './Dashboard';  
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';   
function App() {  
  return (  

            <div className='container'>
    <Router>    

       
      
      <Redirect to="/Login" />

     <switch>
     <Route path='/Login' component={Login} />    

     </switch>

        <Switch>  

        <Route path='/Dashboard' component={Dashboard} />    

        </Switch>  
      
    </Router> 
    </div>
   

  );  

}  


export default App;
