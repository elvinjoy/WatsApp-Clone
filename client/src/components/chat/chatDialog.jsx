import React from 'react';
import { Dialog, Box, styled } from "@mui/material";
import Menu from "./menu/menu";
import EmptyChat from './chat/emptyChat';
import ChatBox from './chat/ChatBox';
import { useContext } from 'react';
import { AccountContext } from '../context/accountProvider';

const Component = styled(Box)`
display: flex;
`

const LeftComponent = styled(Box)`
min-width: 450px;
`

const RightComponent = styled(Box)`
width: 75%
height: 100%
min-width: 300px;
border-left: 1px solid rgba(0, 0, 0, 0.14) 
`

const dialogstylechat = {
    height: "98vh",
    width: "100%",
    maxWidth: "100%",
    minHeight: "10%",
    borderShadow: "0",
    boxShadow: "none",
    overflow: "hidden"
}

const ChatDialog = () => {

    const {person} = useContext(AccountContext);
    
    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogstylechat }}
            hideBackdrop={true}
            maxWidth={'md'}
        >

            <Component>
                <LeftComponent>
                    <Menu />
                </LeftComponent>
                <RightComponent>
                    {Object.keys(person).length ? <ChatBox/> : <EmptyChat /> }
                </RightComponent>
            </Component>
        </Dialog>
    );
};

export default ChatDialog;