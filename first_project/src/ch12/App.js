import { useEffect, useState } from "react";

function App() {
    const [ number, setNumber ] = useState(0);
    const [ number2, setNumber2 ] = useState(0);
    const [ number3, setNumber3 ] = useState(0);

    useEffect(() => {
        // 마운트 지점
        console.log(number2);
        setNumber3(number * 10);
        return () => {
            // 언마운트 지점
        }
    }, [number, number2]);

    const handleButtonOnClick = (e) => {
        setNumber(a => a + 1);
    }

    const handleButtonOnClick2 = (e) => {
        setNumber2(b => b + 10);
    }

    return (
        <>
            <h1>{number}</h1>
            <h1>{number2}</h1>
            <h1>{number3}</h1>
            <button onClick={handleButtonOnClick}>num1증가</button>
            <button onClick={handleButtonOnClick2}>num2증가</button>
        </>
    );
}

export default App;