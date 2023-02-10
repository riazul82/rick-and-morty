import { useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetch(url)
        .then((res) => {
            if(!res.ok) {
                throw new Error('Error! Failed to fetch!!');
            }
            return res.json();
        })
        .then((data) => {
            setData(data.results);
            setLoader(false);
        })
        .catch((err) => {
            console.log(err.message);
            setLoader(false);
        })
    }, [url]);

    return [data, loader];
}

export default useFetch;