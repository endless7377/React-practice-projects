import React from 'react' ;
import Navbar from './navbar';
import Maincontent from './landingPageMainContent';
import Myprojects from './projects';
import About from './aboutMe';
import Contacts from './contacts';


function App(){

    return <div className=" ">
         <Navbar />
         <Maincontent />
         <Myprojects />
         <About />
         <Contacts/>
    </div>
}

export default App;