import React from "react";
import {Container, Stack, StackDivider, Text, Box, Button} from "@chakra-ui/react";

import SideBar from "../components/SideBar";
import Logo from "../components/Logo";
import ProfileButton from "../components/ProfileButton";

import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <Container alignSelf="center" height="100%" maxWidth="container.xl" px={0}>
      <Stack direction="row" divider={<StackDivider margin={0} />} h="100%" spacing={0}>
        <Stack justify="space-between" maxW={275} w="100%">
          <Stack px={8} py={4} spacing={6}>
            <Stack spacing={7}>
              <Logo />
              <SideBar />
            </Stack>
            <Button colorScheme="primary" size="lg" w="100%">
              Tweet
            </Button>
          </Stack>
          <ProfileButton />
        </Stack>
        <Box maxW={600} w="100%">
          <Routes />
        </Box>
        <Text maxW={350} w="100%">
          {""}
        </Text>
      </Stack>
    </Container>
  );
};

export default App;
