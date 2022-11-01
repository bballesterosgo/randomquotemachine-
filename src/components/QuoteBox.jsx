import React from "react";
import '../Stylesheets/QuoteBox.css'
import { FaQuoteLeft } from "react-icons/fa";




function QuoteBox ({ quote, handleNewQuote }){

  
  return <div id="quote-box" className='quote-box-container'>
          <FaQuoteLeft />
          <p id='text'>{quote.text}</p>
          <p id='author'>{quote.author}</p>
          <button 
            id='new-quote' 
            className='newquote-button'
            onClick={handleNewQuote}>
            New Quote
          </button>
        </div>
};


export default QuoteBox;