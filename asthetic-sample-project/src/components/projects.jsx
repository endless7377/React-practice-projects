import React from 'react' ;
import '../output.css';
import Card from './cards';

function Myprojects(){
    return <div>
         <div className="text-white text-[100px] font-bold text-center mt-[14.56rem]">
            My projects
         </div>
         <div className="flex flex-wrap justify-center items-center"> 
            <Card 
              name ="Project-1 " 

              />
            <Card
               name ="Project-2"
            />
            <Card 
               name ="Project-3"
            />
            <Card
               name ="Project-4"
            />
            <Card 
               name="Project-5"
            />
            <Card
               name="Project-6"
            />
         </div>
    </div>
}
export default Myprojects;