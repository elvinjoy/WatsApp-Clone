import React, { useContext, useState } from "react";
import { AccountContext } from "../../context/accountProvider";
import { Box, styled } from "@mui/material";
import { Chat as MessageIcon } from "@mui/icons-material";
import HeaderMenu from "./HeaderMenu";
import InfoDrawer from "../../drawer/InfoDrawer";

const Component = styled(Box)`
  height: 44px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;

const Wrapper = styled(Box)`
  margin-left: auto;
  display: flex;
  align-items: center;

  & > * {
    margin-left: 2px;
    padding: 8px;
    color: #000;
    cursor: pointer; /* Add pointer cursor on hover */

    &:hover {
      color: #555; /* Change color on hover */
      background-color: #e0e0e0; /* Add a subtle background color on hover */
      border-radius: 50%; /* Optional: make the background circular */
    }
  }

  & :first-of-type {
    font-size: 22px;
    margin-right: 8px;
    margin-top: 3px;
  }
`;

const Image = styled("img")({
  height: 40,
  width: 40,
  borderRadius: "50%",
  cursor: "pointer", // Add pointer cursor on hover
});

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const { account } = useContext(AccountContext);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer); 
  };

  return (
    <>
      <Component>
        <Image src={account.picture} alt="DP" onClick={toggleDrawer} />
        <Wrapper>
          <MessageIcon />
          <HeaderMenu setOpenDrawer={setOpenDrawer} />
        </Wrapper>
      </Component>
      <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </>
  );
};

export default Header;
