import { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async (url) => {
            try {
                const response = await axios.get(url);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data: ", error);
                setLoading(false);
            }
        };
        getData(url);
    }, [url]);

    return { data, loading };
};

export default useAxios ;