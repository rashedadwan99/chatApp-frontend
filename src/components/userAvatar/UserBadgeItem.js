import React from "react";
import { Box } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

function UserBadgeItem({ user, handleFunction }) {
  return (
    <Box
      px={2}
      py={1}
      borderRadius="10px"
      m={1}
      mb={2}
      variant="solid"
      fontSize={12}
      backgroundColor="purple"
      color="white"
      cursor="pointer"
      onClick={handleFunction}
    >
      {user.name}
      <CloseIcon pl={1} />
    </Box>
  );
}

export default UserBadgeItem;
