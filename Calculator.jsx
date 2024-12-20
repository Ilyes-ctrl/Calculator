import React, {useState} from 'react';
import './design.css';

function Calculator(){
    const [value, setValue] = useState("");

    function offMode(e) {
        setValue("OFF")
        if (value == "OFF") {
            e.target.value = "";
        }
    }

    return(

        <>
        <div className='container'>
            <div className='real-container'>
                <div className='show-result'>
                    <input className='display-result' type="text" value={value}/>
                </div>
                <div className="all-keys">
                    <div className='first-row'>
                        <button className='key1' onClick={() => setValue("")}>ON</button>
                        <button className='key1' onClick={offMode}>OFF</button>
                        <button className='key1' value={"**(1/2)"} onClick={(e) => setValue(value + e.target.value)}>√</button>
                        <button className='key1' value={"*(1/100)"} onClick={(e) => setValue(value + e.target.value)}>%</button>
                    </div>
                    <div className='second-row'>
                        <button className='key2' value={"0"} onClick={() => setValue("")}>C</button>
                        <button className='key2' onClick={() => setValue("UNAVAILABLE")}>M-</button>
                        <button className='key2' onClick={() => setValue("UNAVAILABLE")}>M+</button>
                        <button className='key2' value={"/"} onClick={(e) => setValue(value + e.target.value)}>÷</button>
                    </div>
                    <div className='third-row'>
                        <button className='key2' value={"7"} onClick={(e) => setValue(value + e.target.value)}>7</button>
                        <button className='key2' value={"8"} onClick={(e) => setValue(value + e.target.value)}>8</button>
                        <button className='key2' value={"9"} onClick={(e) => setValue(value + e.target.value)}>9</button>
                        <button className='key2' value={"*"} onClick={(e) => setValue(value + e.target.value)}>×</button>
                    </div>
                    <div className='fourth-row'>
                        <button className='key2' value={"4"} onClick={(e) => setValue(value + e.target.value)}>4</button>
                        <button className='key2' value={"5"} onClick={(e) => setValue(value + e.target.value)}>5</button>
                        <button className='key2' value={"6"} onClick={(e) => setValue(value + e.target.value)}>6</button>
                        <button className='key2' value={"-"} onClick={(e) => setValue(value + e.target.value)}>-</button>
                    </div>
                    <div className='fifth-row'>
                        <button className='key2' value={"1"} onClick={(e) => setValue(value + e.target.value)}>1</button>
                        <button className='key2' value={"2"} onClick={(e) => setValue(value + e.target.value)}>2</button>
                        <button className='key2' value={"3"} onClick={(e) => setValue(value + e.target.value)}>3</button>
                        <div className='bastard'>
                            <button className='keys' value={"+"} onClick={(e) => setValue(value + e.target.value)}>+</button>
                        </div>
                    </div>
                    <div className='sixth-row'>
                        <button className='key2' value={"0"} onClick={(e) => setValue(value + e.target.value)}>0</button>
                        <button className='key2' value={"."} onClick={(e) => setValue(value + e.target.value)}>.</button>
                        <button className='key2' value={"="} onClick={(e) => setValue(eval(value))}>=</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Calculator