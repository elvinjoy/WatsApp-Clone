import { useEffect, useState, useContext } from "react";
import { Box, styled, Divider } from "@mui/material";
import { getUsers } from "../../../service/api";
import Conversation from "./conversation";
import { AccountContext } from "../../context/accountProvider";

const Component = styled(Box)`
    height: 81vh;
    overflow-y: overlay;
`;

const StyledDivider = styled(Divider)`
    margin: 0 0 0 58px;
    background-color: #e9edef;
    opacity: 0.6;
`;

const Conversations = ({ text }) => {
    const [users, setUsers] = useState([]);
    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            let response = await getUsers();
            const filteredData = response.filter(user => user.name.toLowerCase().includes(text));
            setUsers(filteredData);
        };
        fetchData();
    }, [text]);

    useEffect(() => {
        if (socket?.current) {
            socket.current.emit("addUser", account);
            socket.current.on("getUsers", users => {
                setActiveUsers(users);
            });
        }
    }, [account, socket, setActiveUsers]);

    return (
        <Component>
            {users.map(user => (    
                user.sub !== account.sub && (
                    <div key={user.sub}>
                        <Conversation user={user} />
                        <StyledDivider />
                    </div>
                )
            ))}
        </Component>
    );
};

export default Conversations;
