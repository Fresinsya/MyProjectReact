import { useState } from "react";

function Counter () {

    const [count, setCount] = useState(0);

    const plus = () => {
        console.log("plus")
        setCount(count + 1)
    }

    const minus = () => {
        console.log("minus")
        setCount(count - 1 < 0 ? 0 : count - 1)
    }

    return(
        <div>
            <button onClick={minus}>-</button>
            <span>{count}</span>
            <button onClick={plus}>+</button>
        </div>
        

    )
}

export default Counter;