import React from 'react' ;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


function ContactButton(props){
    return <div className="bg-gray-600 hover:bg-gray-700 w-[37rem] h-[10rem] rounded-[70px] flex m-4 justify-center items-center">
        <div className="mr-[40px] text-[64px]">
            {props.name}
         </div>
         <div>
            <FontAwesomeIcon icon={faArrowRight} style={{fontSize:'4rem'}} />

         </div>
    </div>
}
export default ContactButton;