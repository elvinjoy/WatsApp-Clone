import { Box, Typography, styled } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../context/accountProvider";
import { setConversation, getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/Common-utils";

// Styled component for the container
const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled('img')({
    width: 40,
    height: 46,
    borderRadius: '50%',
    padding: '0 14px',
    objectFit: 'cover',
});

const Container = styled(Box)`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const Timestamp = styled(Typography)`
    font-size: 12px;
    color: #00000099;
    color: #00000099;
    margin-right: 10px;
`;

const Text = styled(Typography)`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
`;

const Conversation = ({ user }) => {
    const { setPerson, account, newMessageFlag } = useContext(AccountContext);
    const [messages, setMessages] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
            const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
            setMessages({ text: data?.message, timestamp: data?.updatedAt });
        };
        getConversationDetails();
    }, [newMessageFlag]);

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, receiverId: user.sub });
    };

    return (
        <Component onClick={() => getUser()}>
            <Box>
                <Image src={user.picture} alt="DP" />
            </Box>
            <Box sx={{ width: '100%' }}>
                <Container>
                    <Typography>{user.name}</Typography>
                    {
                        messages?.text &&
                        <Timestamp>{formatDate(messages?.timestamp)}</Timestamp>
                    }
                </Container>
                <Box>
                    <Text>{messages?.text?.includes('localhost') ? 'media' : messages.text}</Text>
                </Box>
            </Box>
        </Component>
    );
};

export default Conversation;
    