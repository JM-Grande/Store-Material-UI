import React from "react";
import { Stack, Typography, styled } from "@mui/material";

const StyledStack = styled(Stack)({
  alignItems: "center",
  margin: "2em ,0",
  backgroundColor: "gray",
});

const Footer = () => {
  return (
    <>
      <StyledStack>
        <Typography variant="h4" pt="1em">
          Material UI Design Store
        </Typography>
        <Typography variant="span" pb="1em">
          Made By JM Grande
        </Typography>
      </StyledStack>
    </>
  );
};

export default Footer;
