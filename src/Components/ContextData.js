import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
const ContextData=createContext([])
export function ContextDataProvider({children}) {
    let url='https://course-api.com/react-tabs-project'
let [jobs, setJobs] = useState([])
let [loading, setLoading] = useState(true)

async function GetJobs() {
    let {data}=await axios.get(url)
setJobs(data)
setLoading(false)
}
    return (
        <>
         <ContextData.Provider value={{GetJobs,jobs,loading}}>
             {children}
             </ContextData.Provider>   
        </>
    )
}
function useGlobalContext () {
    return useContext(ContextData)
  }
export default useGlobalContext
