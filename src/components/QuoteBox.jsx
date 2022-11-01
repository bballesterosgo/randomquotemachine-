import React from "react";
import '../Stylesheets/QuoteBox.css'
import Text from './Text.jsx'
import { FaQuoteLeft } from "react-icons/fa";

function QuoteBox (){
  return <div id="quote-box" className='quote-box-container'>
            <FaQuoteLeft />
            <Text />
        </div>
};


export default QuoteBox;