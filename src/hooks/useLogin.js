import { useState } from "react";

const useLogin = (handleJwtChange)=> {
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
                const data = await response.json();
                alert("Login falied " + data.message || data.messages);
                return ;
            }
            alert("Login Successful! Redirecting")
          
            const responseData = await response.json();
            handleJwtChange(responseData.jwtToken);

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
                const data = await response.json();
                alert("Registration falied " + (data.message || data.messages));
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

    const handleLogout = ()=> {
        handleJwtChange(null);
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