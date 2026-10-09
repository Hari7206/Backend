"use client"
import { createContext } from "react"
import {useState , useEffect, useContext} from "react"


let Auth = createContext()

export let AuthProvider = ({children}) => {

    const [user , setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    let hydrateUser = () => {
        console.log(" [hydrateUser] starting hydration...")
        try {
            let token = localStorage.getItem("token")
            let email = localStorage.getItem("email")

            if (token) {
             
                setUser({ token, email })
            } else {
               
                setUser(null)
            }
        } catch (error) {
            console.log(" [hydrateUser] error in hydration", error)
            setUser(null)
        } finally {
            setLoading(false)
        }
    }


     useEffect(() => {
      
       hydrateUser()
     }, [])
     

   

    return <Auth.Provider
    value={{
        user,
        setUser ,
        loading
    }}
    >
        {children}
    </Auth.Provider>
}




export let  useAuth = () => useContext(Auth)