import { useReducer, useState } from "react"

export default function Counter(){
    const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, 0)
    function reducer(state: number, action: {type: string, payload: number}){
        switch(action.type){
            case 'increment':
                return state + action.payload
            case 'decrement':
                return state - action.payload
            default:
                return state
        }
    }
    return <div>
        <h1>Count: {state}</h1>

        <button onClick={()=> dispatch({type: 'increment',payload: 1})}>Increment Reducer</button>
        <button onClick={() =>dispatch({type: 'decrement',payload: 1})}>Decrement Reducer</button>
    </div>
}