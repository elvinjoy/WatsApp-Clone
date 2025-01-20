import { Box, Typography, styled, Divider } from "@mui/material";
import { emptyChatImage } from '../../constants/data';


const Component = styled(Box)`
    background: #f8f9fa;
    padding: 30px 0;
    text-align: center;
    height:100vh;
`

const Container = styled(Box)`
    padding: 0 200px;  
`

const Image = styled('img')({
    width: '80%',
    marginTop: 100
});


const Title = styled(Typography)`
    font-size: 32px;
    margin: 25px 0 10px 0;
    font-family:  inherit;
    font-weight: 300;
    color: #41525d;
`

const Subtitle = styled(Typography)`
    font-size: 14px;
    color: #667781;   
    font-weight: 400;
    font-family:  inherit; 
`

const StyledDivider = styled(Divider)`
    margin: 40px 0;
    opacity: 0.6;
`

const MakeCalls = styled(Box)`
    display: flex;
    justify-content: center;
`

const GetLink = styled(Typography)`
    font-size: 14px;
    color: #007bff;
    padding-left: 6px;
    cursor: pointer;
`

const EmptyChat = () => {
    return (
        <>
            <Component>
                <Container>
                    <Image src={emptyChatImage} alt="empty image" />
                    <Title>WatsApp Web</Title>
                    <Subtitle>Now send and receive messages without keeping your phone online.</Subtitle>
                    <Subtitle>Use WatsApp on up to 4 devices and 1 phone at the same time.</Subtitle>
                    <StyledDivider />
                    <MakeCalls>
                        <Subtitle>Make calls from desktop with WhatsApp for Windows.</Subtitle>
                        <GetLink>
                            <a href="https://www.whatsapp.com/android" style={{ textDecoration: 'none' }}>Get it here</a>
                        </GetLink>

                    </MakeCalls>
                </Container>
            </Component>
        </>
    );
};

export default EmptyChat;