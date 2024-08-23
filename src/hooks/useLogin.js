import { useState } from "react";

const useLogin = (setJwt)=> {
    const [showLogin, setShowLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async()=> {
        try {
            const data = {
                username,
                password
            }
            const response = await fetch("http://localhost:8080/auth/login", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });
            if(!response.ok) {
                alert("Login failed ")
                return ;
            }
            alert("Login Successful! Redirecting")
            setTimeout(async()=>{
                const data = await response.json();
                setJwt(data.jwtToken);
                console.log(data);
            }, 2000)
        }catch(exception) {
            alert(exception);
        }
    }
    const register = async()=> {
        try {
            const data = {
                username,
                password
            }
            const response = await fetch("http://localhost:8080/auth/register", {
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data)
            });
            if(!response.ok) {
                alert("Registeration failed")
                return ;
            }
            alert("Resgitration Succesful")

        }catch(exception) {
            alert(exception);
        }
    }
    const handleLogin = ()=>  {
        showLogin ? login() : register();
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