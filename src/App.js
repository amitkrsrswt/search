import './App.css';
import {Routes,Route,Navigate} from "react-router-dom";

import About from "./About";
import Contact from "./Contact";
import Search from "./Search";
import User from "./User";
import Main from "./Main";
import Feedback from "./Feedback";
import Services from "./Services";






function App() {
  return (
    <div >
      <Main />
        <Routes>
          <Route exact path="/" element={ <About />}/>
          <Route exact path="/contact" element={ <Contact />}/>
          <Route exact path="/search" element={ <Search /> }/>
          <Route exact path="/feedback" element={ <Feedback /> }/>

          
          <Route exact path="/user/:name"  element={<User/>}  />    
          <Route exact path="/services" element={ <Services /> }/>
          <Navigate  to="/" />
     

        </Routes>
    </div>
  );
}

export default App;
