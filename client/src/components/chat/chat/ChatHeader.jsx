import { Box, Typography, styled } from "@mui/material";
import { Search, MoreVert } from '@mui/icons-material';
import { useContext, useEffect } from "react";
import { AccountContext } from "../../context/accountProvider";

const Header = styled(Box)` 
    height: 44px;
    background: #ededed;    
    padding: 8px 16px;
    display: flex;
    align-items: center;    
`;

const Image = styled('img')({
    height: 40,
    width: 40,
    objectFit: 'cover',
    borderRadius: '50%',
});

const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const Status = styled(Typography)`
    margin-left: 12px !important;
    font-size: 13px;
    color: #rgba(0, 0, 0, 0.6);
`;

const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
       padding: 8px;
       font-size: 26px;
       color: #000;
    }
`;

const ChatHeader = ({ person }) => {
    const { activeUsers } = useContext(AccountContext);

    useEffect(() => {
        console.log('Active Users:', activeUsers);
        console.log('Current Person:', person);
    }, [activeUsers, person]);

    const isOnline = activeUsers?.find(user => user.sub === person.sub);

    return (
        <Header>
            <Image src={person.picture} alt="DP" />
            <Box sx={{ flexGrow: 1 }}>
                <Name>{person.name}</Name>
                <Status>{isOnline ? 'online' : 'offline'}</Status>
            </Box>
            <RightContainer>
                <Search style={{ marginRight: '10px' }} />
                <MoreVert />
            </RightContainer>
        </Header>
    );
};

export default ChatHeader;
