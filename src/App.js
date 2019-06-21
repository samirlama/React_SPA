import React  , {Component} from 'react';
import Navbar from './components/Navbar.js';
import {BrowserRouter , Route} from 'react-router-dom';
import Home from './components/Home.js';
import Contact from './components/Contact.js';
import About from './components/About.js';
import ShowPost from './components/ShowPost.js';
 class App extends Component {
   render(){
     return (
       <BrowserRouter>
       <div>
          <Navbar />
            <Route exact path = "/" component = {Home} />
            <Route path = "/contact" component = {Contact} />
            <Route path = "/about" component = {About} />
            <Route path = "/:post_id" component = {ShowPost} />
        </div>
        </BrowserRouter>
     )
   }
 }
 export default App; 
