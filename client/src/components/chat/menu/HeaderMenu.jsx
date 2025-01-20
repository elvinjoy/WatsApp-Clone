import { MoreVert } from "@mui/icons-material";
import { Menu, MenuItem, styled } from "@mui/material";
import { useState } from "react";


const Menuoption = styled(MenuItem)`
font-size: 14px;
padding: 15px 60px 5px 24px;
color: #4a4a4a;
`

const HeaderMenu = ({ setOpenDrawer }) => {
    const [open, setOpen] = useState(null);

    const handleClose = () => {
        setOpen(null);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    return (
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={Boolean(open)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                }}
            >
                <Menuoption onClick={() => { handleClose(); setOpenDrawer(true); }}>Profile</Menuoption>
            </Menu>
        </>
    );
};

export default HeaderMenu;
