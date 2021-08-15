import React from "react";

const useFetch = (url) => {
    const [data, setData] = React.useState(undefined);

    const baseURL = "https://www.breakingbadapi.com/api/"; 

    React.useEffect(() => {
        const asyncFunction = async () => {
            const jsonData = await fetch(`${baseURL}${url}`); 
            const data = await jsonData.json();

            setData(data);
        };
        asyncFunction(); 
    }, [url]);

    return data;
};

export default useFetch;