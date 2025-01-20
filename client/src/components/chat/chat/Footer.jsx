import { Box, InputBase, styled } from "@mui/material";
import { EmojiEmotionsOutlined, AttachFile, Mic } from "@mui/icons-material";
import { useEffect } from "react";
import { uploadFile } from "../../../service/api.js";

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    width: 75vw;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #919191;
    }
`;

const Search = styled(Box)`
    background-color: #ffffff;
    border-radius: 18px;
    width: calc(98% - 100px);
`;

const InputField = styled(InputBase)`   
    width: 100%;
    padding: 20px;  
    height: 15px;
    padding-left: 25px;
    font-size: 14px;    
`;

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg);
    cursor: pointer;
`;

const Footer = ({ sendText, setValue, value, file, setFile, setImage }) => {

    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
    
                let response = await uploadFile(data);
                console.log(response); // Ensure this logs the correct URL
                setImage(response.data.image); // Correctly set the image URL
            }
        };
        getImage();
    }, [file]);
    


    const onFileChange = (e) => {
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    return (
        <Container>
            <EmojiEmotionsOutlined style={{ cursor: 'pointer' }} />
            <label htmlFor="fileInput">
                <ClipIcon />
            </label>
            <input
                type="file"
                id="fileInput"
                style={{ display: 'none' }}
                onChange={(e) => onFileChange(e)}
            />
            <Search>
                <InputField
                    placeholder="Type a message"
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={sendText}
                    value={value}
                />
            </Search>
            <Mic style={{ cursor: 'pointer' }} />
        </Container>
    );
};

export default Footer;
