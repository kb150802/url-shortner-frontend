import { useState} from "react";

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
const REACT_APP_CLIENT = process.env.REACT_APP_CLIENT

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
            const response = await fetch(`${API_BASE_URL}/auth/login`, {
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
                window.location.href=REACT_APP_CLIENT
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
            const response = await fetch(`${API_BASE_URL}/auth/register`, {
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