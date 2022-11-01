import React,{ useState }  from "react";
import '../Stylesheets/NewQuote.css';


function NewQuote () {

  const [quote, setQuote] = useState([]);

  const getNewQuote = e => {
    e.preventDefault();

    const updatedQuote = {
      text: 'Me piro',
      author:'Bernardo'
    }

    setQuote(updatedQuote);

    console.log(quote.author)

  }



  return <button 
            className='newquote-button'
            onClick={getNewQuote}>
            New Quote
        </button>
}


export default NewQuote;