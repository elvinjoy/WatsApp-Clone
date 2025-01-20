import { AppBar, Toolbar, styled, Box } from "@mui/material";
import ChatDialog from '../components/chat/chatDialog';
import { useContext } from "react";
import { AccountContext } from "./context/accountProvider";

import LoginDialog from "./account/loginDialog";

const Component = styled(Box)`
height: 100vh;
background-color: #d5d5d5;
`
const Header = styled(AppBar)`
height: 125px; 
background-color: #00A884;
`

const LoginHeader = styled(AppBar)`
height: 220px; 
background-color: #00bfa5;
`

const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (

        <Component>
            {
                account ?
                    <>
                        <Header>
                            <Toolbar>

                            </Toolbar>
                        </Header>
                        <ChatDialog/>
                    </>
                    :
                    <>
                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                        </LoginHeader>
                        <LoginDialog />
                    </>
            }
        </Component>

    )
}

export default Messenger;