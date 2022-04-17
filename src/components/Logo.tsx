import React from "react";
import {Icon, IconProps, useColorMode, useColorModeValue} from "@chakra-ui/react";
import {FaTwitter} from "react-icons/fa";

const Logo: React.FC<IconProps> = (props) => {
  const {toggleColorMode} = useColorMode();
  const logoColor = useColorModeValue("primary.500", "#ededed");

  return (
    <Icon
      as={FaTwitter}
      color={logoColor}
      height={7}
      width={7}
      onClick={toggleColorMode}
      {...props}
    />
  );
};

export default Logo;
