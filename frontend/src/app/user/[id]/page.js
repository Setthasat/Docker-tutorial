"use client";
import { useEffect } from "react";
import UserCard from "@/app/components/UserCard";
import axios from "axios";

const page = ({ params }) => {
    const { id } = params;
    const [isError, setIsError] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(false);
    const [userdata, setUserdata] = React.useState();

    React.useEffect(() => {
        const fetchSingleUser = async () => {
            try {
                setIsLoading(true);
                const data = await axios.get("http://localhost:8888" + "/user", {
                    params: id
                });
                if (data.status != 200) {
                    setIsError(true);
                }
                setUserdata(data.data);
            } catch (error) {
                setIsError(true);
            }
            setIsLoading(false);
        };
        fetchSingleUser();
    }, []);

    return (
        <div>
            <UserCard id={id} />
        </div>
    );
};

export default page;
