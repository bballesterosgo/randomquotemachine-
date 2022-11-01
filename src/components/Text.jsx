import React,{ useState }  from "react";
import '../Stylesheets/Text.css'

 

function Text (){

  const [quote,setQuote] = useState([]);

  const newQuote = {
        text:'Me piro',
        author:'Bernardo'
      }
  
  setQuote(newQuote);


  // const getQuote = e => {
    
  //   const newQuote = {
  //     text:'Me piro',
  //     author:'Bernardo'
  //   }

  //    setQuote(newQuote)
  // }

  return <div 
          className='quote-text' 
          id='text' >
            {quote.text}
        </div>
}

export default Text;