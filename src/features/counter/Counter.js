import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "./counterSlice";
import { Button } from "react-bootstrap";


export function Counter() {

    const [value, setValue] = useState()

    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <div className="d-flex justify-content-around">
                <Button
                    variant="info"
                    aria-label="Increment Value"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </Button>
                <span><h1>{count}</h1></span>
                <Button
                    variant="info"
                    aria-label="Decrement Value"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </Button>
                <div>
                    <input type="number" onChange={(e) => setValue(parseInt(e.target.value))} />
                    <button onClick={() => dispatch(incrementByAmount(value))}>Enter Value</button>
                </div>
            </div>
        </>
    )
}