import React from 'react' ;
import '../output.css';

function Card(props) {
    return <div className="w-[33%] h-[337px] bg-[#36454F] m-[48.5px] rounded-[110px] text-center flex justify-center items-center " >
        
         {props.name}

    </div>
}
export default Card;