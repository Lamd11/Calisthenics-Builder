import React, {useState} from "react";

const Button = () => {

    const [count, setCount] = useState(0);

    const handleClick = () => setCount(count + 1);

    return(
        <div>
            <h2>Pizza's Sold = {count}</h2>
            <button onClick={handleClick}>Increment</button>
        </div>
    );
}

export default Button;