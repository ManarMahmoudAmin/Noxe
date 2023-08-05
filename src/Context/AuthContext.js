import jwtDecode from "jwt-decode";
import { createContext, useEffect, useState } from "react";
export let AuthContext = createContext(0);

function AuthContextProvider(props) {
    useEffect(()=> {
        if(localStorage.getItem('userToken') !== null) {
            saveUserData();
        }
    }, [])
    const [userData, setUserData] = useState(null);
    
    function saveUserData() {
    let encodedToken = localStorage.getItem('userToken');
    let decodedToken = jwtDecode(encodedToken);
    setUserData(decodedToken);
    }
    return (
        <AuthContext.Provider value={{userData, setUserData, saveUserData}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider;