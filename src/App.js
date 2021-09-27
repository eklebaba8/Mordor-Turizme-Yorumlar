import React from 'react';
import Review from './Review';
import {FaBeer} from 'react-icons/fa';

function App() {
  return (
    <main>
       <h2> Reviews projesi <FaBeer /> </h2> 

       <section className='container'>
         <div className='title'>
           <h2>our reviews</h2>
           <div className='underline'></div>
            </div>
           <Review/>
       </section>
    </main>
 
  );
}

export default App;
