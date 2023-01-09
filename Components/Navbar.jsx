import { ReactNode } from "react";
// import Link from "next/link"

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,

  useDisclosure,
  useColorModeValue,
  Stack,
  Spacer,
} from "@chakra-ui/react";


const Links = ["Project"];

const NavLink = ({ children }) => (
  <Link
   
   
    href={"project"}
  >
    {children}
  </Link>
);

export default function Navbar({ img }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            
           
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Box> <Link href="/">Home</Link></Box>
            <HStack
              
              spacing={4}
            
            
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
       
       
          <Flex alignItems={"center"}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={"full"}
              
                minW={0}
              >
                <Avatar size={"sm"} src={img} height={"20"} />
              </MenuButton>
              <MenuList>
                <MenuItem>
                  <Link href="project">Projects</Link>
                </MenuItem>
               
               
               
                <MenuItem>Experience</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link href="project">Project</Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
      <Spacer/>
    </>
  );
}


