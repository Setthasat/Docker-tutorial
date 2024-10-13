"use client";
import axios from 'axios';
import React from 'react';


function page() {

    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [userdata, setUserdata] = React.useState();

    React.useEffect(() => {
        const fetchAllUser = async () => {
            try {
                setIsLoading(true);
                const data = await axios.get(process.env.BACKEND_URL + "/user");
                if (data.status != 200) {
                    setIsError(true);
                }
                setUserdata(data.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchAllUser();
    }, []);

    return (
        <div>page</div>
    );
}

export default page;