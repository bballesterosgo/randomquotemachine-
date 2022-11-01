import './App.css';
import QuoteBox from './components/QuoteBox';
import React,{ useState} from 'react';

//Quotes
const quoteData = [
  { text: `“The purpose of our lives is to be happy.”`, author: "Dalai Lama" },
  { text: `“Life is what happens when you’re busy making other plans.”`, author: "John Lennon" },
  { text: `“Get busy living or get busy dying.”`, author: "Stephen King" },
  { text: `“You only live once, but if you do it right, once is enough.”`, author: "Mae West" },
  { text: ` “Many of life’s failures are people who did not realize how close they were to success when they gave up.”`, author: "Thomas A. Edison" },
];
//Function to get a random quote
const getRandomIndex = (max) => 
  Math.round(Math.random() * ((quoteData.length-1) - 0) + 0);



function App() {
  //Start hook
  const [quote, setQuote] = useState(quoteData[getRandomIndex()])
  //Obtein a new quote 
  const handleNewQuote = () => {
    setQuote(quoteData[getRandomIndex()])
  }

  return (
    <div className="App">
      <div className='title-logo-container'>
        <h1>Random Quote Machine</h1>
      </div>
        <QuoteBox 
          handleNewQuote={handleNewQuote}
          quote={quote}/>
    </div>
  );
}

export default App;
