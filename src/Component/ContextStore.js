import axios from "axios";
import { createContext, useEffect, useState } from "react"

export const Store = createContext();

const ContextStore = (props)=>{
    const [data,setData] = useState([]);

    useEffect(()=>{
        axios
        .get("https://node-final-7q4d.onrender.com/api/blog")
        .then((res) => setData(res.data))
        .catch(err => {
            console.log(err.message)
        });
    },[])
    return(
        <>
        <Store.Provider value={[data,setData]}>
            {props.children}
        </Store.Provider>
        </>
    )

}

export default ContextStore
