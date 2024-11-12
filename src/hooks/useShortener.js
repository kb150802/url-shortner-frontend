import { useState } from "react"

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

const useShortener = ()=> {
    const [longUrl, setLongUrl] = useState("");
    const [customUrl, setCustomUrl] = useState("");
    const [shortenedUrlsList, setShortenedUrlsList] = useState([]);

    const getAllUrls = async()=> {
        try{
            const response = await fetch(`${API_BASE_URL}/user/shortenedUrls`, {
                method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
                    },
            });
            if(response.ok) {
                const data = await response.json();
                console.log(data);
                return data;
            }
        }catch {
            alert("Error while fetching shortened urls")
            return [];
        }
    }
    const fetchAllUrls = async()=> {
        const data = await getAllUrls()
        setShortenedUrlsList(data);
    }
    const shortenUrl =async ()=> {
        try {
            let payload = {
                longUrl
            }
            if(customUrl && customUrl !== "") {
                payload.customUrl = customUrl;
            }

            let resp = await fetch(`${API_BASE_URL}/create`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${localStorage.getItem('jwtToken')}`
                },
                body: JSON.stringify(payload)
            });
            if(!resp.ok) {
                let responseData = await resp.json();
                alert("Failed to shorten URL " + (responseData.message || responseData.messages));     
                return ;           
            }
            let responseData = await resp.json();
            alert("Shortend Url " + responseData.shortUrl);
            fetchAllUrls();
        }catch(exception) {
            alert("Failed to shorten url");
        }
    }

    return {
        longUrl,
        setLongUrl,
        customUrl,
        setCustomUrl,
        shortenUrl,
        fetchAllUrls,
        shortenedUrlsList
    }
}

export default useShortener;