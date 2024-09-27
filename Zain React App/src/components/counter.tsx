import { useReducer, useState, useContext, useEffect } from "react"
import { userContext } from "../App"
export default function Counter(){
    const [count, setCount] = useState(0)
    const [state, dispatch] = useReducer(reducer, 0)
    const value = useContext(userContext)
    const context = useContext(userContext)
    useEffect(()=>{
        context.setValue("new")
    },[])
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
        <h1>Count: {value.value}</h1>

        <button onClick={()=> dispatch({type: 'increment',payload: 1})}>Increment Reducer</button>
        <button onClick={() =>dispatch({type: 'decrement',payload: 1})}>Decrement Reducer</button>
    </div>
}