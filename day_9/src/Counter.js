import react from 'react';
const Counter = () => {
    const [count, setCount] = react.useState(0);
    const decrement = () => {
        setCount(count - 1);
        console.log(count);
    }
    const increment = () => {
        setCount(count + 1);
        console.log(count);
    }
    return (
        <div style={{textAlign: "center"}}>
            <h1>Counter Application</h1>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    )
}
export default Counter;