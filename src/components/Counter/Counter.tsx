import { useState } from "react"
import classes from './Counter.module.css'

export const Counter = () => {
    const [state, setState] = useState(0)
    
    const increment = () => {
        setState(state => state + 1)     
    }

    const decrement = () : boolean | (() => boolean) => {
        return ( 
            state > 0
                ?  function(){
                    setState(state => state - 1)
                    return true
                }()
                : false 
            )
    }

    return (
        <div>
            <button className={classes.btn} onClick={decrement}>-</button>
            <span>{state}</span>
            <button className={classes.btn} onClick={increment}>+</button>
        </div>
    )
}

