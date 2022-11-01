import React,{ useState }  from "react";
import '../Stylesheets/Text.css'


function Text ({ text }){

  return <div 
          className='quote-text' 
          id='text' >
            {text}
        </div>
}

export default Text;