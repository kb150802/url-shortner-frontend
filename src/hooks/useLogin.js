import { useState} from "react";

const useLogin = (handleJwtChange)=> {
    const [showLogin, setShowLogin] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const login = async()=> {
        setIsLoading(true);
        try {
            const data = {
                username,
                password
            }
            console.log(username);
            console.log(password);
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
            const responseData = await response.json();

            setTimeout(()=>{
                window.location.href="http://localhost:3000/dashboard"
                handleJwtChange(responseData.jwtToken);
            },1000);
          


        }catch(exception) {
            alert(exception);
        }
        finally{
            setTimeout(()=>{
                setIsLoading(false)
            }, 1000)
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
        handleLogin,
        isLoading
    }
}

export default useLogin;