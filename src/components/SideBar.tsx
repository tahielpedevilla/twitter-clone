import React from "react";
import {Text, Icon, Stack, StackProps} from "@chakra-ui/react";
import {FaHashtag} from "react-icons/fa";
import {
  IoEllipsisHorizontalCircleOutline,
  IoEllipsisHorizontalCircleSharp,
  IoNotifications,
  IoNotificationsOutline,
} from "react-icons/io5";
import {
  BsEnvelope,
  BsBookmark,
  BsHouse,
  BsPerson,
  BsHouseFill,
  BsList,
  BsEnvelopeFill,
  BsBookmarkFill,
  BsPersonFill,
} from "react-icons/bs";
import {BiHash} from "react-icons/bi";
import {IconType} from "react-icons";
import {Link, useLocation} from "react-router-dom";

interface ListLink {
  href: string;
  text: string;
  activeIcon: IconType;
  inactiveIcon: IconType;
}

const LINKS: ListLink[] = [
  {
    href: "/home",
    text: "Home",
    activeIcon: BsHouseFill,
    inactiveIcon: BsHouse,
  },
  {
    href: "/explore",
    text: "Explore",
    activeIcon: FaHashtag,
    inactiveIcon: BiHash,
  },
  {
    href: "/notifications",
    text: "Notifications",
    activeIcon: IoNotifications,
    inactiveIcon: IoNotificationsOutline,
  },
  {
    href: "/messages",
    text: "Messages",
    activeIcon: BsEnvelopeFill,
    inactiveIcon: BsEnvelope,
  },
  {
    href: "/bookmarks",
    text: "Bookmarks",
    activeIcon: BsBookmarkFill,
    inactiveIcon: BsBookmark,
  },
  {
    href: "/lists",
    text: "Lists",
    activeIcon: BsList,
    inactiveIcon: BsList,
  },
  {
    href: "/acaVaElNombreDeUsuario",
    text: "Profile",
    activeIcon: BsPersonFill,
    inactiveIcon: BsPerson,
  },
  {
    href: "/More",
    text: "More",
    activeIcon: IoEllipsisHorizontalCircleSharp,
    inactiveIcon: IoEllipsisHorizontalCircleOutline,
  },
];

const SideBar: React.FC<StackProps> = (props) => {
  const {pathname} = useLocation();

  return (
    <Stack fontSize="xl" fontWeight="semibold" spacing={6} w="100%" {...props}>
      {LINKS.map((link) => (
        <Link key={link.href} to={link.href}>
          <Stack
            align="center"
            color={pathname === link.href ? "primary.500" : "inherit"}
            direction="row"
            spacing={5}
          >
            <Icon as={pathname === link.href ? link.activeIcon : link.inactiveIcon} h={7} w={7} />
            <Text fontWeight={pathname === link.href ? "800" : "700"}>{link.text}</Text>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};

export default SideBar;
