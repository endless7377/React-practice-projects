import React from 'react' ;
import ContactButton from './contactbutton';


function Contacts(){
    return <div className="my-app">
        <div className="mt-[15.56rem] mb-[3rem] text-center text-[100px] ">
            Contacts
        </div>
        <div className="flex flex-wrap justify-center items-center mt-2">
            <ContactButton
                name="LinkedIn"
            />
            <ContactButton
                name="GitHub"
            />
            <ContactButton
                name="twitter"
            />
            <ContactButton
                name= "Newsletter"
            />
            <ContactButton
                name= "Medium"
            />
        </div>
    </div>
}
export default Contacts;