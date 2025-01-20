import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../../components/constants/data"
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AccountContext } from "../context/accountProvider";
import { addUser } from '../../service/api';


const Component = styled(Box)`
display: flex;
`

const Container = styled(Box)`
padding : 100px 0 100px 100px;
`

const QRCode = styled('img')({
    height: 300,
    width: 300,
    margin: '100px 0 0 80px'
})

const dialogstyle = {
    height: "100%",
    marginTop: "12%",
    width: "60%",
    maxWidth: "100%",
    minHeight: "100%",
    boxShadow: "none",
    overflow: "hidden"
}

const Title = styled(Typography)`
font-size: 36px;
color: #525252;
font-weight: 300;
font-family: inherit;
margin-bottom: 25px;
`

const StyledLists = styled(List)`
    & > li {
        padding:0;
        margin-top: 15px;
        font-size: 20px;
        line-heighgt: 28px;
        color:4a4a4a;
    }
`


const LoginDialog = () => {

    const { setAccount } = useContext(AccountContext);  

    const onLoginSuccess =  async (res) => {
        const decode = jwtDecode(res.credential);
        console.log(decode)
        setAccount(decode);
        await addUser(decode);
    }

    const onLoginErr = (res) => {
        console.log("Login failed", res);
    }

    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogstyle }}
            hideBackdrop={true}
        >
            <Component>
                <Container>
                    <Title>To Use WatsApp on Your Computer</Title>
                    <StyledLists>
                        <ListItem>1. Open WatsApp on your Phone</ListItem>
                        <ListItem>2. Tap Menu Settings and Select WatsApp Web</ListItem>
                        <ListItem>3. Point Your Phone To the Screen to Capture the Code</ListItem>
                    </StyledLists>
                </Container>
                <Box style={{ position: 'relative' }}>
                    <QRCode src={qrCodeImage} alt="qrCodeImage" />
                    <Box style={{ position: 'absolute', top: '50%', transform: 'translatex(70%)' }} >
                        <GoogleLogin
                            onSuccess={onLoginSuccess}
                            onError={onLoginErr}
                        />
                    </Box>
                </Box>
            </Component>
        </Dialog>
        
    )
}

export default LoginDialog;

