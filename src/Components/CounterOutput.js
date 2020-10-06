import React from 'react'
import {useSelector} from 'react-redux'

export default function CounterOutput() {
    /// For single Value
    const counter = useSelector((state) => state.counter);
    // const name = useSelector((state) => state.name);
    // const mazy = useSelector((state) => state.mazy)

    //For Object
    //  const obj = useSelector(state => ({
    //      counter:state.counter,
    //      name:state.name,
    //      mazy:state.mazy
    //  }))

   

    return (
        <div>
           {/* <h1> Count Value:::{obj.counter} </h1>
           <h2> Count Value:::{obj.name} </h2>
           <h2> Count Value:::{obj.mazy} </h2> */}

        <h2> Count Value:::{counter} </h2> 
        </div>
    )
}

