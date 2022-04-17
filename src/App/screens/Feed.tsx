import React from "react";
import {
  Text,
  Icon,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  StackDivider,
  Image,
  Textarea,
  Button,
  IconButton,
  CircularProgress,
} from "@chakra-ui/react";
import {BsStars} from "react-icons/bs";
import {HiOutlinePhotograph} from "react-icons/hi";
import {RiFileGifLine} from "react-icons/ri";
import {BiPoll, BiSmile} from "react-icons/bi";
import {MdOutlineEditCalendar} from "react-icons/md";
import {FiPlus} from "react-icons/fi";
import {AnimatePresence, motion} from "framer-motion";

const profilePhoto =
  "https://pbs.twimg.com/profile_images/1485344021153300489/1VtSqpzn_400x400.jpg";

const FeedScreen: React.FC = () => {
  const [tweets, setTweets] = React.useState<string[]>([]);

  return (
    <Stack direction="row" divider={<StackDivider />} h="100%" spacing={0}>
      <Stack divider={<StackDivider />} spacing={0} w="100%">
        <Stack align="center" direction="row" justify="space-between" p={4}>
          <Text fontSize="lg" fontWeight="extrabold">
            Home
          </Text>
          <Icon as={BsStars} h={5} w={5} />
        </Stack>
        <Stack direction="row" px={4} py={2} spacing={4}>
          <Image h={12} rounded="full" src={profilePhoto} w={12} />
          <Stack divider={<StackDivider />} w="100%">
            <Textarea
              _placeholder={{color: "gray.400"}}
              fontSize="xl"
              fontWeight="600"
              placeholder="What's happening?"
              resize="none"
              variant={"unstyled"}
            />
            <Stack align="center" direction="row" justify="space-between" py={1}>
              <Stack direction="row" spacing={0}>
                <IconButton
                  aria-label="Add photos or video"
                  icon={<HiOutlinePhotograph color="#1d9bf0" size={22} />}
                  variant="ghost"
                />
                <IconButton
                  aria-label="Add a GIF"
                  icon={<RiFileGifLine color="#1d9bf0" size={22} />}
                  variant="ghost"
                />
                <IconButton
                  aria-label="Add poll"
                  icon={<BiPoll color="#1d9bf0" size={22} />}
                  variant="ghost"
                />
                <IconButton
                  aria-label="Add emoji"
                  icon={<BiSmile color="#1d9bf0" size={22} />}
                  variant="ghost"
                />
                <IconButton
                  aria-label="Schedule Tweet"
                  icon={<MdOutlineEditCalendar color="#1d9bf0" size={22} />}
                  variant="ghost"
                />
              </Stack>
              <Stack align="center" direction="row" spacing={3}>
                <Stack align="center" direction="row" divider={<StackDivider h="30px" />}>
                  <CircularProgress
                    size="22px"
                    thickness="8px"
                    trackColor="rgb(56, 68, 77);"
                    value={43}
                  />
                  <IconButton
                    aria-label="Add Tweet"
                    icon={<FiPlus color="#1d9bf0" size="16px" />}
                    rounded="full"
                    size="xs"
                    variant="outline"
                  />
                </Stack>
                <Button
                  colorScheme="primary"
                  onClick={() => setTweets((tweets) => tweets.concat(String(+new Date())))}
                >
                  Tweet
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          divider={<StackDivider />}
          flex={1}
          maxH="100vh"
          overflowY="auto"
          spacing={0}
          sx={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <AnimatePresence>
            {tweets.map((id) => (
              <Stack
                key={id}
                animate={{scale: 1}}
                as={motion.div}
                direction="row"
                exit={{scale: 0}}
                initial={{scale: 0}}
                layoutId={String(id)}
                maxW={480}
                p={4}
                spacing={4}
                w="100%"
                onClick={() => setTweets((tweets) => tweets.filter((tweet) => tweet !== id))}
              >
                <SkeletonCircle
                  endColor="gray.200"
                  h={12}
                  minH={12}
                  minW={12}
                  startColor="gray.200"
                  w={12}
                />
                <Stack spacing={3} w="100%">
                  <Stack align="flex-end" direction="row" spacing={2}>
                    <Skeleton endColor="gray.200" h={6} startColor="gray.200" w="120px" />
                    <Skeleton endColor="gray.200" h={3} startColor="gray.200" w="180px" />
                  </Stack>
                  <SkeletonText
                    endColor="gray.200"
                    height="100%"
                    noOfLines={5}
                    spacing={2}
                    startColor="gray.200"
                  />
                </Stack>
              </Stack>
            ))}
          </AnimatePresence>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FeedScreen;
