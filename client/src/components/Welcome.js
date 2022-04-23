import React from 'react';
import { Link } from 'react-router-dom';

export const someFunction = () => {
  console.log("we are using this function from our welcome file")
}

const Welcome = () => {
  return (
    <div>
      <h1>WELCOME ROUTE ACTIVATED!</h1>
      <Link to="/welcome/more-info"><button>More Info...</button></Link>
    </div>
  )
}

export default Welcome;