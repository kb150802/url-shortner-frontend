import { useState } from "react"

const useShortener = ()=> {
    const [longUrl, setLongUrl] = useState("");
    const [customUrl, setCustomUrl] = useState("");
    const [shortenedUrlsList, setShortenedUrlsList] = useState([]);

    const getAllUrls = async()=> {
        const response = await fetch("http://localhost:8080/user/shortenedUrls", {
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
        return [];
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
            if(customUrl && customUrl != "") {
                payload.customUrl = customUrl;
            }

            let resp = await fetch("http://localhost:8080/create", {
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