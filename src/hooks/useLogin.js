import { useState } from "react";

const useLogin = ()=> {
    const [showLogin, setShowLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = ()=>  {

    }
    return {
        showLogin,
        setShowLogin,
        username,
        setUsername,
        password,
        setPassword,
        handleLogin
    }
}

export default useLogin;