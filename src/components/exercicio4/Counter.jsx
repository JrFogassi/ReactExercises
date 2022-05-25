import React, {useState} from "react";

const CounterIncrements = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <p>This button has been clicked: {counter} times</p>
            <button onClick={() => setCounter(counter + 1)}>Click me!</button>
        </>
    )
}

export default CounterIncrements 