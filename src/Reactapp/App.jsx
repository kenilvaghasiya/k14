import Nav from './Nav';
import Home from "./Home"
import Services from "./Services"
import About from "./About"
import ContactUs from "./ContactUs"
import React, {useEffect} from 'react';
import { Switch,Route ,Redirect} from 'react-router-dom';
import Cursor from './Cursor';



function App() {
 





  return (
    <>
    <Cursor/>
   <Nav/>

    <Switch>
   <Route exact path="/" component={Home} />
   <Route exact path="/home" component={Home} />
   <Route exact path="/services" component={Services} />
   <Route exact path="/contactus" component={ContactUs} />
   <Route exact path="/about" component={About} />
  <Redirect to="/"></Redirect>
   </Switch>
 
   </>
  );
}

export default App;
