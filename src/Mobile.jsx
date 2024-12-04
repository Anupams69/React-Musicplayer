import React from 'react';

const Mobile = ({increment ,reset,decrement}) => {
    return (
        <div>
            
         
        <button onClick={increment} >+</button>
        <button onClick={reset}>0</button>
        <button onClick={decrement}>-</button>

        



        </div>
    );
}

export default Mobile;
