import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom"; 
import { GoogleOAuthProvider } from '@react-oauth/google';
import Login from "./components/Login";
import Home from "./container/Home";

const App =()=>{
    return (
        <GoogleOAuthProvider clientId= "896528351380-6l3c2bj3u3ecbmigbrgqmlqvuogjmvji.apps.googleusercontent.com">
            <Routes>
                <Route path="/*" element={<Home />}/>
                <Route path="login" element={<Login />}/>
            </Routes>
        </GoogleOAuthProvider>

        
    )
}

export default App