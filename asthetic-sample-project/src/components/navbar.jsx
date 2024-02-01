import React,{useRef} from 'react' ;
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import '../output.css';
gsap.registerPlugin(ScrollTrigger);

// the three things here which are helping us to use gsap in our project are the use ref funciton to provide a reference and then we have gsap library imported by simple gsap keyword then we have a useGSAP function which helps us in using all gsap functions like timeline and tweens . 
function Navbar(){
    const container = useRef();
    // here we have created a reference which we have to define in the element in which we want to scope my effect . 

    let tl = gsap.timeline();
    useGSAP(()=>{
        tl.from(".main-logo",{
            duration:2,
            scale: 2,
            opacity:0.5,
            // scrollTrigger:{
            //     start:"top center",
            //     end:"bottom center",
            //     markers:true,
            //     trigger:".main-container",
            //     toggleActions:"play none re none ",
            // }


        })
    },{scope : container});
    // const navItems = useRef();
    // useGSAP(()=>)

    // this is the way to use gsap in react if you want to use other plugins you can use it as usual .
    return <div className="flex justify-between capitalize text-lg main-container" ref={container}>
    {/* this is a div for logo which is it's app  */}
          <div className="main-logo ml-[200px]" >
              it's app
          </div>

          <div className=" list-none flex mr-[200px]" ref={navItems}>
             <li>home</li>
             <li>projects</li>
             <li>about</li>
             <li>contact</li>

          </div>
    </div>
}
export default Navbar;
