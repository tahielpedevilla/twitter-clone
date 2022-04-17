import React from "react";
import {IoEllipsisHorizontal} from "react-icons/io5";
import {Stack, Image, useColorModeValue, Text, Icon} from "@chakra-ui/react";

const profilePhoto =
  "https://pbs.twimg.com/profile_images/1485344021153300489/1VtSqpzn_400x400.jpg";

const ProfileButton: React.FC = () => (
  <Stack align="center" direction="row" justify="space-between" p={6}>
    <Stack align="center" direction="row" spacing={2}>
      <Image h={10} rounded="full" src={profilePhoto} w={10} />
      <Stack spacing={0}>
        <Text fontSize="15px" fontWeight="700">
          Tahiel
        </Text>
        <Text color={useColorModeValue("gray.600", "gray.400")} fontSize="15px" fontWeight="400">
          @tahielpedevilla
        </Text>
      </Stack>
    </Stack>
    <Icon as={IoEllipsisHorizontal} h={5} w={5} />
  </Stack>
);

export default ProfileButton;
